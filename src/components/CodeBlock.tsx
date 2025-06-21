export const CodeBlock = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              <span className="gradient-text">Copy, paste, customize.</span><br />
              It's that simple.
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Every component comes with clean, production-ready code that you can copy and paste directly into your project. No complex setup required.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300">React and HTML versions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300">TypeScript support</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300">Fully customizable</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300">Dark mode included</span>
              </div>
            </div>
          </div>

          <div className="code-block">
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-400">Button.tsx</span>
              <button className="text-sm text-purple-400 hover:text-purple-300">Copy</button>
            </div>
            <div className="p-4 text-sm leading-relaxed overflow-x-auto">
              <div className="flex">
                <div className="line-numbers pr-4 text-right select-none">
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                  <div>7</div>
                  <div>8</div>
                  <div>9</div>
                  <div>10</div>
                  <div>11</div>
                  <div>12</div>
                  <div>13</div>
                  <div>14</div>
                  <div>15</div>
                </div>
                <div className="flex-1">
                  <div><span className="text-[#569cd6]">import</span> <span className="text-[#dcdcaa]">React</span> <span className="text-[#569cd6]">from</span> <span className="text-[#ce9178]">'react'</span></div>
                  <div><span className="text-[#569cd6]">import</span> { <span className="text-[#dcdcaa]">motion</span> } <span className="text-[#569cd6]">from</span> <span className="text-[#ce9178]">'framer-motion'</span></div>
                  <div></div>
                  <div><span className="text-[#569cd6]">interface</span> <span className="text-[#dcdcaa]">ButtonProps</span> {'{'}</div>
                  <div>&nbsp;&nbsp;<span className="text-[#dcdcaa]">children</span>: <span className="text-[#569cd6]">React.ReactNode</span></div>
                  <div>&nbsp;&nbsp;<span className="text-[#dcdcaa]">variant</span>?: <span className="text-[#ce9178]">'primary'</span> | <span className="text-[#ce9178]">'secondary'</span></div>
                  <div>&nbsp;&nbsp;<span className="text-[#dcdcaa]">onClick</span>?: () =&gt; <span className="text-[#569cd6]">void</span></div>
                  <div>{'}'}</div>
                  <div></div>
                  <div><span className="text-[#569cd6]">export</span> <span className="text-[#569cd6]">const</span> <span className="text-[#dcdcaa]">Button</span> = ({'{'}</div>
                  <div>&nbsp;&nbsp;<span className="text-[#dcdcaa]">children</span>, <span className="text-[#dcdcaa]">variant</span> = <span className="text-[#ce9178]">'primary'</span>, <span className="text-[#dcdcaa]">onClick</span></div>
                  <div>: <span className="text-[#dcdcaa]">ButtonProps</span>) =&gt; {'{'}</div>
                  <div>&nbsp;&nbsp;<span className="text-[#569cd6]">return</span> (</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#dcdcaa]">motion.button</span></div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#dcdcaa]">whileHover</span>=</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};