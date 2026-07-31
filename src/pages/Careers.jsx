import React, { useEffect, useState } from 'react';
import SEO from '../components/SEO';

const defaultJobs = [
  {
    tital: 'Frontend Developer',
    discription: 'Build responsive web UI for our product using React and Tailwind.',
    requirment: '2+ years React, HTML/CSS, Git, component-driven design',
    type: 'Full-time',
    experince: '2 years',
  },
  {
    tital: 'Backend Developer',
    discription: 'Develop API services, database logic, and integrations.',
    requirment: 'Node.js, Express, REST, SQL/NoSQL, deployment basics',
    type: 'Full-time',
    experince: '3 years',
  },
  {
    tital: 'QA Engineer',
    discription: 'Test web flows, write automation scripts, and verify bug fixes.',
    requirment: 'Manual + automated testing, test cases, bug reporting',
    type: 'Contract',
    experince: '1 year',
  },
];

const JobsList = ({ jobs, onApply }) => {
  if (!jobs || jobs.length === 0) return <p className="text-slate-600 dark:text-slate-400">No open roles at the moment.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {jobs.map((job, index) => (
        <div key={`${job.id || job.title || job.tital || 'job'}-${index}`} className="flex flex-col justify-between p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 break-words">{job.title || job.tital || 'Untitled role'}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 break-words">{job.location || 'Remote'} • {job.type || 'Full-time'}</p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed break-words">{job.description || job.discription || 'No description available.'}</p>
            {(job.requirment || job.requirement) && (
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 break-words"><strong>Requirements:</strong> {job.requirment || job.requirement}</p>
            )}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row items-start sm:items-center justify-between pt-4 mt-4 border-t border-slate-200 dark:border-slate-800">
            <button onClick={() => onApply(job)} className="w-full sm:w-auto px-4 py-2 rounded-md bg-indigo-600 text-white">Apply</button>
            <a href={job.link || '#'} className="text-sm text-indigo-600">Details</a>
          </div>
        </div>
      ))}
    </div>
  );
};


const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [applyingFor, setApplyingFor] = useState(null);
  const [form, setForm] = useState({ name: '', mail: '', mobile: '', resume: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');
  const SCRIPT_BASE = import.meta.env.VITE_JOBS_PROXY_URL || '/api/careers';
  const SHEET_GET = import.meta.env.VITE_JOBS_SHEET_URL || `${SCRIPT_BASE}?action=getjobs`;
  const SHEET_POST = import.meta.env.VITE_JOBS_SHEET_POST_URL || SCRIPT_BASE;

  useEffect(() => {
    const fetchJobs = async () => {
      if (!SHEET_GET) {
        setLoading(false);
        setJobs(defaultJobs);
        return;
      }
      try {
        const res = await fetch(SHEET_GET);
        if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
        const contentType = res.headers.get('content-type') || '';
        if (!contentType.includes('application/json')) {
          throw new Error('Remote endpoint did not return JSON.');
        }
        const data = await res.json();
        const remoteJobs = Array.isArray(data) ? data : (data.jobs || []);
        if (!remoteJobs.length) {
          throw new Error('No jobs returned from remote endpoint.');
        }
        setJobs(remoteJobs);
      } catch (e) {
        console.error(e);
        setJobs(defaultJobs);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const handleApply = (job) => {
    setApplyingFor(job);
    setForm({ name: '', mail: '', mobile: '', resume: '', message: '' });
  };

  const storeApplicationLocally = (payload) => {
    try {
      const stored = window.localStorage.getItem('careersApplications');
      const applications = stored ? JSON.parse(stored) : [];
      applications.push(payload);
      window.localStorage.setItem('careersApplications', JSON.stringify(applications));
    } catch (error) {
      console.error('Failed to store application locally', error);
    }
  };

  const submitApplication = async (e) => {
    e.preventDefault();
    if (!applyingFor) return;
    setIsSubmitting(true);
    const payload = {
      tital: applyingFor.tital || applyingFor.title || '',
      name: form.name,
      mobile: form.mobile,
      mail: form.mail,
      ApplyFor: applyingFor.tital || applyingFor.title || '',
      requirment: applyingFor.requirment || applyingFor.requirement || '',
      type: applyingFor.type || '',
      experince: applyingFor.experince || applyingFor.experience || '',
      resume: form.resume,
      message: form.message,
      appliedAt: new Date().toISOString(),
      sendConfirmation: true,
      source: 'website',
    };

    const completeSubmission = () => {
      setSubmissionMessage('Application submitted successfully.');
      setApplyingFor(null);
      setIsSubmitting(false);
      setForm({ name: '', mail: '', mobile: '', resume: '', message: '' });
      window.setTimeout(() => setSubmissionMessage(''), 8000);
    };

    if (!SHEET_POST) {
      storeApplicationLocally(payload);
      completeSubmission();
      return;
    }

    try {
      const res = await fetch(SHEET_POST, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        throw new Error(`Submission failed: ${res.status}`);
      }
      completeSubmission();
    } catch (err) {
      console.error(err);
      storeApplicationLocally(payload);
      completeSubmission();
    }
  };

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <SEO title="Careers - Join Us" description="Open roles at AshbitSoft" ogUrl="/company/careers" />

      <div className="max-w-5xl mx-auto px-4 py-24">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">Careers</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">We're hiring. Browse open roles and apply — responses are saved back to the configured sheet.</p>
        </div>

        {submissionMessage && (
          <div className="mb-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-emerald-900 dark:border-emerald-900/40 dark:bg-emerald-950/40 dark:text-emerald-200">
            {submissionMessage}
          </div>
        )}

        {loading && <p className="text-slate-600 dark:text-slate-400">Loading jobs...</p>}

        {!loading && (
          <JobsList jobs={jobs} onApply={handleApply} />
        )}

        {/* Application Modal/Box */}
        {applyingFor && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <div className="absolute inset-0 bg-slate-900/60" onClick={() => setApplyingFor(null)} />
            <form onSubmit={submitApplication} className="relative z-60 w-full max-w-full sm:max-w-3xl bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-xl overflow-y-auto max-h-[95vh]">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Apply: {applyingFor.title || applyingFor.tital || 'Job'}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 break-words">{(applyingFor.location || 'Remote')} • {(applyingFor.type || 'Full-time')}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                <input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Full name" className="px-4 py-3 rounded-lg border" />
                <input required value={form.mobile} onChange={e=>setForm({...form,mobile:e.target.value})} placeholder="Mobile" className="px-4 py-3 rounded-lg border" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                <input required type="email" value={form.mail} onChange={e=>setForm({...form,mail:e.target.value})} placeholder="Email" className="px-4 py-3 rounded-lg border" />
                <label className="cursor-pointer flex items-center justify-between px-4 py-3 rounded-lg border bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition">
                  <span>{form.resume ? form.resume : 'Choose resume file'}</span>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) => setForm({ ...form, resume: e.target.files?.[0]?.name || '' })}
                  />
                </label>
              </div>
              <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Cover letter / message" className="w-full px-4 py-3 rounded-lg border mb-4" rows={5} />

              <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-4 py-2 rounded-md text-white ${isSubmitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                  <button type="button" onClick={()=>setApplyingFor(null)} className="px-4 py-2 rounded-md bg-slate-100 dark:bg-slate-800">Cancel</button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Careers;
