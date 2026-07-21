import { useState } from 'react';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Subscription failed.');
      }

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setEmail('');
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      {submitted ? (
        <div className="p-3 bg-neon-green/10 border border-neon-green/30 rounded-lg font-sans text-xs text-neon-green">
          Subscribed! Check your inbox for updates.
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <p className="text-xs text-muted-gray font-sans">
            Get notified about new releases and updates.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              required
              disabled={isSubmitting}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="bg-card-bg border border-charcoal rounded-md px-3 py-2 text-xs text-off-white placeholder-muted-gray/50 focus:outline-none focus:border-neon-green flex-grow font-sans"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-off-white text-rich-black hover:bg-neon-green hover:text-black transition-all text-xs font-semibold rounded-md cursor-pointer disabled:opacity-50 shrink-0 font-sans"
            >
              {isSubmitting ? '...' : 'Join'}
            </button>
          </div>
          {submitError && (
            <span className="text-[11px] text-red-400 font-sans mt-1">
              {submitError}
            </span>
          )}
        </div>
      )}
    </form>
  );
};

export default NewsletterForm;

