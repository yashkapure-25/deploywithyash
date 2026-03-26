import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DevOpsImg from '../Assets/img/DevOps.png';

const STAGES = ['Build', 'Test', 'Package', 'Deploy'];

const TERMINAL_LINES = [
  { prompt: '$', text: 'git push origin main' },
  { prompt: '>', text: 'triggering CI pipeline...' },
  { prompt: '>', text: 'terraform plan --out=tfplan' },
  { prompt: '>', text: 'provisioning AWS infrastructure' },
];

const DevOpsLoader: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [visibleLines, setVisibleLines] = useState(1);

  useEffect(() => {
    const stageTimer = setInterval(() => {
      setActiveStage(prev => (prev + 1) % STAGES.length);
    }, 550);
    const lineTimer = setInterval(() => {
      setVisibleLines(prev => Math.min(prev + 1, TERMINAL_LINES.length));
    }, 480);
    return () => {
      clearInterval(stageTimer);
      clearInterval(lineTimer);
    };
  }, []);

  return (
    <motion.div
      className="devops-loader-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Ambient red glow blobs */}
      <div
        className="absolute w-72 h-72 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(217,4,41,0.12)', top: '15%', left: '10%' }}
        aria-hidden="true"
      />
      <div
        className="absolute w-64 h-64 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(141,153,174,0.08)', bottom: '15%', right: '10%' }}
        aria-hidden="true"
      />

      <motion.div
        className="devops-loader-card"
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275] }}
      >
        {/* Rotating conic border highlight */}
        <div className="devops-loader-card__glow" aria-hidden="true" />

        <div className="devops-loader-inner">

          {/* Header */}
          <div className="devops-loader-header">
            <motion.div
              className="devops-loader-logo overflow-hidden flex items-center justify-center"
              animate={{ boxShadow: ['0 0 8px rgba(217,4,41,0.3)', '0 0 20px rgba(217,4,41,0.6)', '0 0 8px rgba(217,4,41,0.3)'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img src={DevOpsImg} alt="Yash Kapure DevOps Engineering Profile" className="w-full h-full object-cover" />
            </motion.div>
            <div>
              <div className="devops-loader-title">Deploying DevOps Portfolio</div>
              <div className="devops-loader-sub">aws-ci/cd &gt; terraform apply --auto-approve</div>
            </div>
          </div>

          {/* Pipeline bar */}
          <div className="devops-loader-pipeline">
            <div className="devops-loader-bar-track">
              <motion.div
                className="devops-loader-bar"
                animate={{ x: ['-60%', '0%', '60%'], scaleX: [0.3, 1, 0.4] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
            <div className="devops-loader-stages">
              {STAGES.map((stage, i) => (
                <motion.span
                  key={stage}
                  className={activeStage === i ? 'devops-loader-stage--active' : ''}
                  animate={activeStage === i ? { scale: 1.05 } : { scale: 1 }}
                  transition={{ duration: 0.25 }}
                >
                  {activeStage === i && (
                    <motion.span
                      className="devops-loader-stage-dot"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    />
                  )}
                  {stage}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Terminal */}
          <div className="devops-loader-terminal">
            <div className="devops-loader-terminal-header">
              <div className="devops-loader-terminal-dots">
                <span /><span /><span />
              </div>
              <span className="text-[0.7rem]">cloud-devops@aws:~/pipeline</span>
            </div>
            <div className="devops-loader-terminal-body">
              <AnimatePresence>
                {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
                  <motion.div
                    key={i}
                    className="devops-loader-line"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="devops-loader-prompt">{line.prompt}</span>
                    <span>{line.text}</span>
                    {i === visibleLines - 1 && (
                      <motion.span
                        className="devops-loader-cursor"
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.9, repeat: Infinity }}
                      />
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
};

export default DevOpsLoader;
