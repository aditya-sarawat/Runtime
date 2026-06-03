import { useState, useEffect } from 'react';
import Crosshair from './Crosshair';

const FeedbackForm = ({ onBack }) => {
  const [category, setCategory] = useState('cf-power-tools');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [consoleLogs, setConsoleLogs] = useState(['SYS: WAITING FOR USER INPUT...']);
  const [txHash, setTxHash] = useState('');

  // Auto Scroll to Top on Mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCategorySelect = (id) => {
    setCategory(id);
    setConsoleLogs((prev) => [
      ...prev,
      `SYS: CATEGORY CHANGED TO [${id.toUpperCase().replace(/-/g, '_')}]`,
    ]);
  };

  const handleInputChange = (field, val) => {
    if (field === 'name') setName(val);
    if (field === 'email') setEmail(val);
    if (field === 'subject') setSubject(val);
    if (field === 'message') setMessage(val);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setConsoleLogs((prev) => [...prev, 'ERR: VALIDATION FAILED - MISSING REQUIRED FIELDS']);
      return;
    }

    setIsSubmitting(true);
    setConsoleLogs((prev) => [
      ...prev,
      'SYS: COMPILING INTAKE DATA PACKAGE...',
      `DATA: { CATEGORY: "${category}", EMAIL: "${email}" }`,
    ]);

    const appendLog = (log) => {
      setConsoleLogs((prev) => [...prev, log]);
    };

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    try {
      await sleep(400);
      appendLog('NET: RESOLVING INTAKE_DAEMON ROUTE...');
      await sleep(400);
      appendLog('NET: ESTABLISHING SECURE PROTOCOL TUNNEL...');
      await sleep(400);
      appendLog('SEC: SIGNING TRANSACTION ENVELOPE...');
      await sleep(400);
      appendLog('SYS: TRANSMITTING PACKETS (3.44 KB)...');

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
        throw new Error(data.error || 'INTAKE_DAEMON REJECTED PACKETS');
      }

      await sleep(400);
      appendLog('SYS: TRANSACTION ACCEPTED BY REMOTE SOCKET.');
      await sleep(300);
      appendLog(`SYS: REMOTE DB WRITE CONFIRMED. ID: ${data.insertedId}`);

      setTxHash(data.txHash);
      setSubmitSuccess(true);
    } catch (error) {
      await sleep(400);
      appendLog(`ERR: TRANSMISSION FAILURE - ${error.message.toUpperCase()}`);
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
    setConsoleLogs(['SYS: INTAKE DAEMON REINITIALIZED. WAITING FOR INPUT...']);
  };

  return (
    <div className="w-full flex-grow flex flex-col bg-rich-black transition-colors duration-300">
      
      {/* Header bar */}
      <div className="border-b border-charcoal px-6 md:px-12 py-6 bg-panel-header/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative">
        <Crosshair position="bottom-right" />
        <button
          onClick={onBack}
          className="font-mono text-xs font-bold text-muted-gray hover:text-neon-green transition-colors cursor-pointer"
        >
          ← BACK TO WORKSPACE
        </button>
        <span className="font-mono text-[11px] text-muted-gray uppercase">
          SYS_INTAKE // FEEDBACK_CONSOLE
        </span>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full border-b border-charcoal flex-grow">
        
        {/* Left Column: Form Fields */}
        <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-charcoal flex flex-col justify-between relative bg-card-bg">
          <Crosshair position="bottom-right" />
          
          {!submitSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-8 text-left">
              <div>
                <span className="font-mono text-[11px] text-neon-green font-bold block mb-4 uppercase tracking-widest">// FEEDBACK INGESTION</span>
                <h2 className="font-sans font-black text-4xl text-off-white uppercase tracking-tighter leading-none mb-4">
                  FEEDBACK / FEATURE REQUEST
                </h2>
                <p className="text-sm text-muted-gray font-sans leading-relaxed max-w-lg">
                  Submit design feedback, system bug logs, or request modular features for the digital runtime suites.
                </p>
              </div>

              {/* Form Category Selector */}
              <div className="space-y-3">
                <span className="font-mono text-[11px] text-muted-gray block uppercase tracking-widest">// CHOOSE TARGET TARGET</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'cf-power-tools', label: 'CF POWER TOOLS' },
                    { id: 'cp-contest-tracker', label: 'CONTEST TRACKER' },
                    { id: 'general-request', label: 'GENERAL FEATURE' },
                  ].map((target) => (
                    <button
                      key={target.id}
                      type="button"
                      onClick={() => handleCategorySelect(target.id)}
                      className={`py-3 px-4 border font-mono text-xs font-bold uppercase transition-all duration-200 cursor-pointer ${
                        category === target.id
                          ? 'border-neon-green bg-neon-green/10 text-neon-green'
                          : 'border-charcoal text-muted-gray hover:border-muted-gray hover:text-off-white'
                      }`}
                    >
                      {target.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-mono text-[10px] text-muted-gray uppercase block">USER_NAME (REQUIRED)</label>
                  <input
                    type="text"
                    required
                    value={name}
                    disabled={isSubmitting}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="e.g. ALAN_TURING"
                    className="w-full bg-panel-input border border-charcoal px-4 py-3 font-mono text-xs text-off-white placeholder-charcoal focus:outline-none focus:border-muted-gray transition-colors duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] text-muted-gray uppercase block">EMAIL_ADDRESS (REQUIRED)</label>
                  <input
                    type="email"
                    required
                    value={email}
                    disabled={isSubmitting}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="e.g. alan@runtime.sys"
                    className="w-full bg-panel-input border border-charcoal px-4 py-3 font-mono text-xs text-off-white placeholder-charcoal focus:outline-none focus:border-muted-gray transition-colors duration-200"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label className="font-mono text-[10px] text-muted-gray uppercase block">TOPIC_SUBJECT</label>
                <input
                  type="text"
                  value={subject}
                  disabled={isSubmitting}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  placeholder="e.g. Inconsistent widget scaling on dashboard overlay"
                  className="w-full bg-panel-input border border-charcoal px-4 py-3 font-mono text-xs text-off-white placeholder-charcoal focus:outline-none focus:border-muted-gray transition-colors duration-200"
                />
              </div>

              {/* Message Details */}
              <div className="space-y-2">
                <label className="font-mono text-[10px] text-muted-gray uppercase block">REPORT_DETAILS / SUGGESTIONS (REQUIRED)</label>
                <textarea
                  required
                  rows="5"
                  value={message}
                  disabled={isSubmitting}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Describe your bug logs or outline your modular suggestions here..."
                  className="w-full bg-panel-input border border-charcoal px-4 py-3 font-mono text-xs text-off-white placeholder-charcoal focus:outline-none focus:border-muted-gray transition-colors duration-200 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 text-xs font-mono font-bold uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                    isSubmitting
                      ? 'bg-charcoal text-muted-gray cursor-not-allowed'
                      : 'bg-off-white text-rich-black hover:bg-neon-green hover:text-black'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block w-2.5 h-2.5 border-2 border-muted-gray border-t-transparent rounded-full animate-spin"></span>
                      TRANSMITTING_PACKETS...
                    </>
                  ) : (
                    'TRANSMIT_DATA // SEND'
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-8 text-left py-12">
              <div>
                <span className="font-mono text-[11px] text-neon-green font-bold block mb-4 uppercase tracking-widest">// SUBMISSION OK</span>
                <h2 className="font-sans font-black text-4xl text-neon-green uppercase tracking-tighter leading-none mb-4">
                  TRANSMISSION SUCCESSFUL
                </h2>
                <p className="text-sm text-muted-gray font-sans leading-relaxed max-w-lg">
                  Feedback payload package compiled and written to the database node synchronization queue.
                </p>
              </div>

              <div className="border border-neon-green bg-neon-green/5 p-6 font-mono text-xs space-y-4 max-w-lg">
                <div className="flex justify-between border-b border-charcoal/50 pb-2 text-[10px] text-muted-gray uppercase">
                  <span>RECEIPT_META</span>
                  <span className="text-neon-green">STATUS: 200 OK</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between gap-4">
                    <span className="text-muted-gray uppercase">TX_HASH:</span>
                    <span className="text-off-white truncate max-w-[240px] md:max-w-xs">{txHash}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-gray uppercase">TARGET_SUITE:</span>
                    <span className="text-off-white uppercase">{category.replace(/-/g, ' ')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-gray uppercase">CONTACT:</span>
                    <span className="text-off-white">{email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-gray uppercase">SIGNATURE:</span>
                    <span className="text-neon-green font-bold">[VERIFIED_SECURE]</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 max-w-lg pt-6">
                <button
                  onClick={onBack}
                  className="flex-1 py-3.5 bg-off-white text-rich-black font-mono font-bold text-xs uppercase hover:bg-neon-green hover:text-black transition-all cursor-pointer"
                >
                  ← RETURN TO HOME
                </button>
                <button
                  onClick={resetForm}
                  className="flex-1 py-3.5 border border-charcoal text-off-white font-mono font-bold text-xs uppercase hover:border-muted-gray hover:text-neon-green transition-all cursor-pointer"
                >
                  SUBMIT_ANOTHER
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Visual Console Output */}
        <div className="p-8 lg:p-12 flex flex-col justify-between relative">
          <div className="space-y-8">
            <div>
              <span className="font-mono text-[11px] text-muted-gray block mb-6 tracking-widest uppercase select-none">// TRANSMISSION PROTOCOL TELEMETRY</span>
              <div className="bg-panel-inner p-4 border border-charcoal relative h-96 font-mono text-xs text-left overflow-y-auto select-none transition-colors duration-300">
                <Crosshair position="bottom-right" />
                
                <div className="space-y-2 text-muted-gray text-[10px] leading-relaxed">
                  {consoleLogs.map((log, index) => (
                    <div key={index} className="flex gap-2">
                      <span className={log.startsWith('ERR:') ? 'text-red-500' : log.startsWith('SYS:') ? 'text-neon-green' : 'text-off-white'}>
                        {log.startsWith('ERR:') ? '✕' : log.startsWith('SYS:') ? '✓' : '»'}
                      </span>
                      <span>{log}</span>
                    </div>
                  ))}
                  <div className="animate-pulse inline-block w-1.5 h-3.5 bg-neon-green ml-1"></div>
                </div>
              </div>
            </div>

            <div className="space-y-2 font-mono text-[11px] text-muted-gray leading-relaxed text-left">
              <span className="block font-bold uppercase tracking-wide">// TELEMETRY PROTOCOL INFO</span>
              <p>
                Remote Intake Server is listening on port <span className="text-neon-green">443</span> (HTTPS). 
                Telemetry metadata contains Browser User Agent, Active Visual Scheme, and Client Timestamp parameters.
              </p>
            </div>
          </div>

          <div className="mt-12 font-mono text-[11px] text-charcoal select-none">
            TELEMETRY_ENGINE // V1.0.4_LIVE
          </div>
        </div>

      </div>
    </div>
  );
};

export default FeedbackForm;
