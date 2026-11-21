import { useEffect, useState } from 'react';
import { Coffee, ShieldCheck } from 'lucide-react';
import { supabase, authRedirect } from './supabase';

const titles = { signup: 'Your usual spot. Your own account.', signin: 'Hey, welcome back.', reset: 'Let’s get you back in.', update: 'A fresh start for your password.' };

export default function MemberArea() {
  const [mode, setMode] = useState('signup');
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;
    const params = new URLSearchParams(window.location.hash.slice(1));
    if (params.has('error_description')) {
      setError('This email link has expired or is invalid. Please request a new one.');
      history.replaceState(null, '', `${location.pathname}#members`);
    }
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, next) => {
      if (!active) return;
      setSession(next);
      setLoading(false);
      if (event === 'PASSWORD_RECOVERY') {
        setMode('update');
        setMessage('Choose a new password to finish resetting your account.');
        requestAnimationFrame(() => document.getElementById('members')?.scrollIntoView());
      }
    });
    supabase.auth.getSession().then(({ data, error: sessionError }) => {
      if (!active) return;
      setSession(data.session);
      setLoading(false);
      if (sessionError) setError('We couldn’t restore your session. Please sign in again.');
    }).catch(() => { if (active) { setLoading(false); setError('Unable to connect. Please try again.'); } });
    return () => { active = false; subscription.unsubscribe(); };
  }, []);

  function changeMode(next) {
    setMode(next); setPassword(''); setConfirmation(''); setMessage(''); setError('');
  }

  async function submit(event) {
    event.preventDefault();
    if (busy) return;
    setError(''); setMessage('');
    if ((mode === 'signup' || mode === 'update') && password !== confirmation) {
      setError('Your passwords don’t match. Please try again.'); return;
    }
    setBusy(true);
    try {
      if (mode === 'signup') {
        const { data, error } = await supabase.auth.signUp({ email: email.trim(), password, options: { emailRedirectTo: authRedirect } });
        if (error) throw error;
        setMessage(data.session ? 'You’re signed in. Welcome to JoFei Cafe!' : 'Check your inbox for a confirmation link. If you already have an account, sign in instead.');
      } else if (mode === 'signin') {
        const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
        if (error) throw error;
        setMessage('You’re signed in. Good to see you again!');
      } else if (mode === 'reset') {
        const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), { redirectTo: authRedirect });
        if (error) throw error;
        setMessage('If an account exists for this email, a reset link will arrive shortly. Check your spam folder too.');
      } else {
        const { error } = await supabase.auth.updateUser({ password });
        if (error) throw error;
        setMode('signin');
        setMessage('Your password has been updated.');
      }
    } catch (err) {
      if (mode === 'signin') setError('Unable to sign in. Check your email and password, and confirm your email first.');
      else if (err.code === 'email_address_not_authorized' || /authorized|smtp/i.test(err.message || '')) setError('Email delivery is not ready for this address yet. Please try again once member email service is available.');
      else if (/rate|too many/i.test(err.message || '')) setError('Too many attempts. Please wait a few minutes before trying again.');
      else setError(err.message || 'Something went wrong. Please try again.');
    } finally { setPassword(''); setConfirmation(''); setBusy(false); }
  }

  async function signOut() {
    setBusy(true); setError(''); setMessage('');
    try {
      const { error } = await supabase.auth.signOut({ scope: 'local' });
      if (error) throw error;
      setSession(null); setMode('signin'); setEmail(''); setPassword(''); setConfirmation(''); setMessage('You’re signed out. See you around!');
    } catch { setError('Unable to sign out. Please try again.'); }
    finally { setBusy(false); }
  }

  return <section id="members" className="member-section section-space">
    <div className="shell member-layout">
      <div className="member-intro"><span className="member-icon"><Coffee size={32}/></span><p className="eyebrow">THE JOFEI CREW</p><h2>A familiar face.<br/><em>A place in the crew.</em></h2><p>Make yourself at home. Create your JoFei Cafe member account, or sign in when you’re back in the neighbourhood.</p><div className="member-privacy"><ShieldCheck size={21}/><span>Just your email and password. No school details, birthday, or student ID needed.</span></div></div>
      <div className="member-panel" aria-busy={busy || loading}>
        {loading ? <p role="status">Checking your session…</p> : session && mode !== 'update' ? <>
          <p className="eyebrow">YOU’RE PART OF THE CREW</p><h3>Welcome to JoFei.</h3><p className="member-email">Signed in as <strong>{session.user.email}</strong></p><p>Your member account is ready. Grab your usual and make yourself at home.</p><button className="button button-dark" disabled={busy} onClick={signOut}>{busy ? 'Signing out…' : 'Sign out'}</button>
        </> : <>
          {(mode === 'signup' || mode === 'signin') && <div className="member-tabs" aria-label="Account options"><button type="button" aria-pressed={mode === 'signup'} onClick={() => changeMode('signup')} disabled={busy}>Join the crew</button><button type="button" aria-pressed={mode === 'signin'} onClick={() => changeMode('signin')} disabled={busy}>Sign in</button></div>}
          <h3>{titles[mode]}</h3>
          <form onSubmit={submit}>
            {mode !== 'update' && <label htmlFor="member-email">Email address<input id="member-email" name="email" type="email" autoComplete="email" required maxLength={254} value={email} onChange={e => setEmail(e.target.value)} disabled={busy}/></label>}
            {mode !== 'reset' && <label htmlFor="member-password">{mode === 'update' ? 'New password' : 'Password'}<input id="member-password" name="password" type="password" autoComplete={mode === 'signin' ? 'current-password' : 'new-password'} required minLength={mode === 'signin' ? 1 : 10} maxLength={128} value={password} onChange={e => setPassword(e.target.value)} disabled={busy}/>{mode !== 'signin' && <span className="field-help">At least 10 characters. Use a unique password.</span>}</label>}
            {(mode === 'signup' || mode === 'update') && <label htmlFor="member-confirm">Confirm password<input id="member-confirm" name="confirmPassword" type="password" autoComplete="new-password" required minLength={10} maxLength={128} value={confirmation} onChange={e => setConfirmation(e.target.value)} disabled={busy}/></label>}
            <button className="button button-dark member-submit" disabled={busy} type="submit">{busy ? 'One moment…' : ({ signup: 'Create my account', signin: 'Sign in', reset: 'Send reset link', update: 'Save new password' })[mode]}</button>
          </form>
          {mode === 'signin' && <button className="member-text-button" disabled={busy} onClick={() => changeMode('reset')}>Forgot your password?</button>}
          {mode === 'reset' && <button className="member-text-button" disabled={busy} onClick={() => changeMode('signin')}>Back to sign in</button>}
          {mode === 'signup' && <p className="member-fineprint">We use your email to manage your account and send essential sign-in messages. Creating an account doesn’t subscribe you to marketing emails.</p>}
        </>}
        {message && <p className="member-message" role="status">{message}</p>}{error && <p className="member-error" role="alert">{error}</p>}
      </div>
    </div>
  </section>;
}
