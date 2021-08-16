import { useState, useEffect } from 'react';
import Preview from './preview';
import bundle from '../bundler';
import CodeEditor from './code-editor';
import Resizable from './resizable';

const CodeCell = () => {
  const [code, setCode] = useState('');
  const [err, setErr] = useState('');
  const [input, setInput] = useState('');

  useEffect(() => {
    let timer = setTimeout(async () => {
      const output = await bundle(input);
      setCode(output.code);
      setErr(output.err);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <Resizable direction='vertical'>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
        <Resizable direction='horizontal'>
          <CodeEditor
            initialValue='//Enter Code Here'
            onChange={(value) => setInput(value)}
          />
        </Resizable>
        <Preview code={code} buildStatus={err} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
