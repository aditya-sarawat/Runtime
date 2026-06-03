import { useState } from 'react';
import Crosshair from './Crosshair';

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
    <form onSubmit={handleSubmit} className="border border-charcoal bg-panel-input p-5 flex flex-col justify-between h-full group focus-within:border-muted-gray transition-colors duration-300 relative">
      <Crosshair position="top-left" />
      <Crosshair position="top-right" />
      <Crosshair position="bottom-left" />
      <Crosshair position="bottom-right" />
      <div className="flex justify-between items-center border-b border-charcoal pb-2 mb-4">
        <span className="font-mono text-[11px] text-muted-gray">SUBSCRIBE_ARCHIVE.SH</span>
        <span className="w-1.5 h-1.5 bg-charcoal rounded-none"></span>
      </div>

      {submitted ? (
        <div className="flex-grow flex flex-col justify-center items-center font-mono py-4">
          <div className="text-neon-green font-bold text-xs mb-1.5">SUBSCRIPTION_ACTIVE</div>
          <div className="text-[11px] text-muted-gray text-center uppercase tracking-wider leading-relaxed">
            Transmission sync complete. Welcome to the archive.
          </div>
        </div>
      ) : (
        <div className="flex-grow flex flex-col justify-between">
          <div className="space-y-3">
            <label className="font-mono text-[11px] text-muted-gray block uppercase tracking-wide">
              // JOIN THE ARCHIVE
            </label>
            <div className="flex items-center border border-charcoal px-3 py-2 bg-panel-bg focus-within:border-muted-gray transition-colors duration-300">
              <span className="font-mono text-muted-gray text-xs mr-2 select-none">$</span>
              <input
                type="email"
                required
                disabled={isSubmitting}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="developer@domain.io"
                className="bg-transparent text-off-white font-mono text-xs focus:outline-none w-full placeholder-charcoal"
              />
            </div>
            {submitError && (
              <div className="text-[10px] text-red-500 font-mono mt-1 text-left uppercase">
                ✕ ERR: {submitError}
              </div>
            )}
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-4 py-2.5 bg-off-white text-rich-black font-mono font-bold text-xs uppercase hover:bg-neon-green hover:text-black transition-all duration-300 rounded-none border border-transparent cursor-pointer disabled:bg-charcoal disabled:text-muted-gray"
          >
            {isSubmitting ? 'SUBSCRIBING...' : 'SUBSCRIBE →'}
          </button>
        </div>
      )}
    </form>
  );
};

export default NewsletterForm;
