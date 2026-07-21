import { useState, useEffect } from 'react';

const FeedbackForm = ({ onBack }) => {
  const [category, setCategory] = useState('cf-power-tools');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [txHash, setTxHash] = useState('');

  // Auto Scroll to Top on Mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (field, val) => {
    if (field === 'name') setName(val);
    if (field === 'email') setEmail(val);
    if (field === 'subject') setSubject(val);
    if (field === 'message') setMessage(val);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          category,
          name,
          email,
          subject,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send feedback');
      }

      setTxHash(data.txHash);
      setSubmitSuccess(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setSubmitSuccess(false);
    setIsSubmitting(false);
    setTxHash('');
  };

  return (
    <div className="w-full flex-grow flex flex-col bg-rich-black transition-colors duration-300">
      
      {/* Container */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-8 md:py-12 flex flex-col gap-8 w-full text-left">
        
        {/* Top Nav */}
        <div className="flex justify-between items-center pb-4 border-b border-charcoal">
          <button
            onClick={onBack}
            className="text-sm font-sans text-muted-gray hover:text-off-white transition-colors cursor-pointer flex items-center gap-2"
          >
            ← Back to Home
          </button>
          <span className="text-sm font-mono text-neon-green uppercase tracking-widest font-semibold">
            Feedback
          </span>
        </div>

        {!submitSuccess ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-off-white mb-3">
                Feedback & Feature Requests
              </h1>
              <p className="text-base text-muted-gray font-sans leading-relaxed">
                Have an idea, bug report, or feature suggestion? Let us know below.
              </p>
            </div>

            {/* Category Selector */}
            <div className="flex flex-col gap-3">
              <label className="text-sm font-sans text-muted-gray uppercase tracking-wider font-semibold">
                Category
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'cf-power-tools', label: 'CF Power Tools' },
                  { id: 'cp-contest-tracker', label: 'CP Contest Tracker' },
                  { id: 'general-request', label: 'General Feature' },
                ].map((target) => (
                  <button
                    key={target.id}
                    type="button"
                    onClick={() => setCategory(target.id)}
                    className={`py-3 px-4 rounded-lg font-sans text-sm font-medium transition-all duration-200 cursor-pointer text-center ${
                      category === target.id
                        ? 'bg-neon-green/10 text-neon-green border border-neon-green/30'
                        : 'bg-card-bg border border-charcoal text-muted-gray hover:border-muted-gray hover:text-off-white'
                    }`}
                  >
                    {target.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Name & Email inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-sans text-muted-gray font-medium">Your Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  disabled={isSubmitting}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="e.g. Alex Rivera"
                  className="w-full bg-card-bg border border-charcoal rounded-lg px-4 py-3 text-sm text-off-white placeholder-muted-gray/50 focus:outline-none focus:border-neon-green transition-colors duration-200"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-sans text-muted-gray font-medium">Email Address *</label>
                <input
                  type="email"
                  required
                  value={email}
                  disabled={isSubmitting}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="e.g. alex@example.com"
                  className="w-full bg-card-bg border border-charcoal rounded-lg px-4 py-3 text-sm text-off-white placeholder-muted-gray/50 focus:outline-none focus:border-neon-green transition-colors duration-200"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-sans text-muted-gray font-medium">Subject</label>
              <input
                type="text"
                value={subject}
                disabled={isSubmitting}
                onChange={(e) => handleInputChange('subject', e.target.value)}
                placeholder="e.g. Feature request for dark mode sync"
                className="w-full bg-card-bg border border-charcoal rounded-lg px-4 py-3 text-sm text-off-white placeholder-muted-gray/50 focus:outline-none focus:border-neon-green transition-colors duration-200"
              />
            </div>

            {/* Message Details */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-sans text-muted-gray font-medium">Message *</label>
              <textarea
                required
                rows="5"
                value={message}
                disabled={isSubmitting}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Describe your suggestion or report details..."
                className="w-full bg-card-bg border border-charcoal rounded-lg px-4 py-3 text-sm text-off-white placeholder-muted-gray/50 focus:outline-none focus:border-neon-green transition-colors duration-200 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3.5 text-sm font-sans font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                  isSubmitting
                    ? 'bg-charcoal text-muted-gray cursor-not-allowed'
                    : 'bg-off-white text-rich-black hover:bg-neon-green hover:text-black'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
              </button>
            </div>
          </form>
        ) : (
          <div className="bg-card-bg border border-charcoal rounded-xl p-8 md:p-12 flex flex-col gap-6 text-left">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-neon-green inline-block"></span>
              <h2 className="text-2xl font-bold font-sans text-off-white">
                Feedback Received
              </h2>
            </div>
            
            <p className="text-base text-muted-gray font-sans leading-relaxed">
              Thank you! Your submission has been received. We review every piece of feedback carefully.
            </p>

            {txHash && (
              <div className="bg-panel-header/50 border border-charcoal rounded-lg p-4 font-mono text-sm text-muted-gray space-y-1">
                <div>Reference ID: <span className="text-off-white">{txHash}</span></div>
                <div>Category: <span className="text-off-white capitalize">{category.replace(/-/g, ' ')}</span></div>
              </div>
            )}

            <div className="flex gap-4 pt-4">
              <button
                onClick={onBack}
                className="px-6 py-3 bg-off-white text-rich-black font-sans font-semibold text-sm rounded-lg hover:bg-neon-green hover:text-black transition-all cursor-pointer"
              >
                Back to Home
              </button>
              <button
                onClick={resetForm}
                className="px-6 py-3 border border-charcoal text-off-white font-sans font-semibold text-sm rounded-lg hover:border-muted-gray transition-all cursor-pointer"
              >
                Submit Another
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default FeedbackForm;

