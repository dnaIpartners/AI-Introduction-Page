
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const AnimatedChar = ({ char, progress, range }: { char: string, progress: MotionValue<number>, range: [number, number] }) => {
  const color = useTransform(progress, range, ["#001641", "#FFFFFF"]);
  return (
    <motion.span style={{ color }}>
      {char}
    </motion.span>
  );
};

const AboutView: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 85%", "end 50%"]
  });

  const text1 = "아이파트너즈의 AX는 사람을 줄이지 않고 키웁니다. ";
  const text2 = "전 구성원을 '비즈니스 아키텍트'로 성장시켜 흔들림 없는 최상의 프로젝트 품질을 완성합니다.";
  const totalChars = text1.length + text2.length;

  return (
    <div className="bg-transparent min-h-screen relative overflow-x-hidden font-sans text-white">
      
      {/* Global Background Noise/Texture */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-10"></div>

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center h-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.2] mb-8 text-white break-keep">
              AI는 사람을 대신하는 것이 아니라,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3FF] to-[#0033FF]">역량을 한 단계 위로</span><br />
              끌어올리는 것입니다.
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-medium tracking-tight max-w-3xl break-keep leading-relaxed">
              1년차가 5년차의 시야를 갖고, 5년차가 10년차의 깊이를 갖습니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- INTRO TEXT SECTION --- */}
      <section className="py-32 md:py-48 bg-black/40 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-5xl">
            <h3 className="text-sm font-bold tracking-[0.2em] text-[#00A3FF] uppercase mb-12">Our Mission</h3>
            <h2 ref={textRef} className="text-[22px] md:text-[43px] lg:text-[64px] font-bold mb-12 leading-[1.3] tracking-tight break-keep text-gray-400"> 
              <span>
                {text1.split('').map((char, i) => {
                  const start = i / totalChars;
                  const end = start + (1 / totalChars);
                  return <AnimatedChar key={i} char={char} progress={scrollYProgress} range={[start, end]} />;
                })}
              </span>
              <br className="hidden md:block" />
              {text2.split('').map((char, i) => {
                const start = (text1.length + i) / totalChars;
                const end = start + (1 / totalChars);
                return <AnimatedChar key={i} char={char} progress={scrollYProgress} range={[start, end]} />;
              })}
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-7xl break-keep leading-relaxed font-light">        
             지능형 워크플로우 안에서는 실무진의 경력 한계가 사라집니다. 주니어 컨설턴트는 AI의 방대한 데이터 분석력을 활용해 단숨에 시니어급의 거시적인 프로젝트 시야를 확보합니다. 소모적인 반복 작업에서 해방된 시니어 컨설턴트는 고객사의 비즈니스 맥락을 깊이 있게 해석하고 차별화된 전략 수립에 온전히 집중하여, 실질적인 비즈니스 성과와 프로젝트 업무 품질의 비약적인 향상을 이끌어냅니다.
            </p>
          </div>
        </div>
      </section>

      {/* --- BUSINESS AREAS: DX to AX SECTION --- */}
      <section className="bg-black/60 backdrop-blur-md text-white relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-24 text-center md:text-left">
            <h3 className="text-sm font-bold tracking-[0.2em] text-[#0033FF] uppercase mb-4">Our Vision</h3>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">
              From <span className="text-gray-500">Web Agency</span> to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3FF] to-[#0033FF]">AI Partner</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl break-keep font-light">
              단순히 웹과 앱을 '구축'하던 디지털 에이전시(DX)를 넘어, 고객의 비즈니스에 지능을 불어넣는 <strong className="text-white font-medium">AI 파트너(AX)</strong>로 도약합니다.
            </p>
          </div>

          <div className="relative flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-0">
            
            {/* DX Card (Past/Present) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-[42%] bg-white/5 border border-white/10 rounded-3xl p-10 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-600"></div>
              <div className="relative z-10">
                <div className="text-gray-500 font-mono text-sm mb-4 tracking-widest">DX : DIGITAL TRANSFORMATION</div>
                <h3 className="text-3xl font-bold mb-6 text-gray-300">구축 중심의 에이전시</h3>
                <p className="text-gray-400 mb-10 leading-relaxed font-light break-keep h-24">
                  오프라인 비즈니스를 온라인으로 옮기고, 사용자가 접근하기 쉬운 플랫폼을 만드는 인프라 중심의 디지털 전환 단계입니다.
                </p>
                
                <div className="space-y-4">
                  {[
                    { title: 'Web & App Platform', desc: '반응형 웹 및 모바일 앱 구축' },
                    { title: 'UI/UX Optimization', desc: '사용자 편의성 중심의 인터페이스 설계' },
                    { title: 'System Integration', desc: '레거시 시스템 연동 및 데이터 수집' }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col gap-1 border-b border-white/5 pb-4 last:border-0">
                      <div className="flex items-center gap-3 text-gray-300 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                        {item.title}
                      </div>
                      <div className="pl-4 text-sm text-gray-500">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Transformation Bridge (Desktop Only) */}
            <div className="hidden lg:flex w-[16%] relative items-center justify-center">
              {/* Connecting Line */}
              <div className="absolute w-full h-0.5 bg-gradient-to-r from-gray-600 via-[#0033FF] to-[#00A3FF]"></div>
              {/* Flowing Particles */}
              <motion.div 
                animate={{ x: [-50, 50], opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white] z-10"
              />
              {/* Center Node */}
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="relative z-20 w-20 h-20 rounded-full bg-black border border-[#0033FF]/50 flex items-center justify-center shadow-[0_0_30px_rgba(0,51,255,0.2)] backdrop-blur-md"
              >
                <span className="font-black text-xl text-transparent bg-clip-text bg-gradient-to-br from-[#00A3FF] to-[#0033FF]">i-PIE</span>
              </motion.div>
            </div>

            {/* Mobile Bridge (Arrow) */}
            <div className="flex lg:hidden justify-center py-4">
               <ArrowRight className="w-8 h-8 text-[#0033FF] rotate-90" />
            </div>

            {/* AX Card (Future) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-[42%] bg-gradient-to-br from-[#001641]/80 to-black border border-[#0033FF]/30 rounded-3xl p-10 relative overflow-hidden group shadow-[0_0_40px_rgba(0,51,255,0.1)]"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0033FF]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#0033FF]/30 transition-colors duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0033FF] to-[#00A3FF]"></div>
              
              <div className="relative z-10">
                <div className="text-[#00A3FF] font-mono text-sm mb-4 tracking-widest flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00A3FF] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00A3FF]"></span>
                  </span>
                  AX : AI TRANSFORMATION
                </div>
                <h3 className="text-3xl font-bold mb-6 text-white">지능형 경험 에이전시</h3>
                <p className="text-gray-300 mb-10 leading-relaxed font-light break-keep h-24">
                  AI가 스스로 데이터를 분석하고 콘텐츠를 생성하며, 사용자에게 초개인화된 예측형 디지털 경험을 제공하는 지능형 전환 단계입니다.
                </p>
                
                <div className="space-y-4">
                  {[
                    { title: 'AI-Driven UX/UI', desc: '사용자 행동 예측 및 초개인화된 맞춤형 인터페이스' },
                    { title: 'Generative Content', desc: '생성형 AI 기반의 텍스트, 이미지 등 동적 콘텐츠 생성' },
                    { title: 'Intelligent Agent', desc: '자율적으로 고객과 상호작용하는 AI 에이전트 연동' }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col gap-1 border-b border-[#0033FF]/20 pb-4 last:border-0">
                      <div className="flex items-center gap-3 text-white font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00A3FF] shadow-[0_0_8px_#00A3FF]"></div>
                        {item.title}
                      </div>
                      <div className="pl-4 text-sm text-gray-400">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Bottom Summary / Services */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-24 pt-16 border-t border-white/10"
          >
            <h4 className="text-2xl font-bold mb-10 text-center">아이파트너즈의 핵심 AX 서비스</h4>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { title: 'AI Service Planning', desc: '비즈니스 목표에 맞춘 AI 서비스 기획 및 도입 컨설팅' },
                { title: 'Intelligent Platform', desc: 'LLM 및 AI 에이전트가 결합된 지능형 웹/앱 플랫폼 구축' },
                { title: 'AI Design System', desc: '데이터 기반으로 최적화되는 동적 AI 디자인 시스템 설계' },
                { title: 'Workflow Automation', desc: '내부 업무 효율을 극대화하는 AI 기반 자동화 워크플로우' }
              ].map((service, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#0033FF]/50 transition-all duration-300 cursor-pointer group flex flex-col h-full">
                  <div className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <div className="w-2 h-2 rounded-full bg-[#0033FF] group-hover:shadow-[0_0_10px_#0033FF]"></div>
                  </div>
                  <h5 className="text-lg font-bold mb-3 text-white">{service.title}</h5>
                  <p className="text-sm text-gray-400 font-light break-keep mt-auto">{service.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-32 bg-black/80 backdrop-blur-md relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter text-white mb-8">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3FF] to-[#0033FF]">Innovate?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              아이파트너즈와 함께 새로운 디지털 경험을 만들어갈 준비가 되셨나요? 지금 바로 문의해주세요.
            </p>
            <button className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold tracking-wide hover:bg-[#0033FF] hover:text-white transition-colors duration-300 group">
              CONTACT US
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default AboutView;
