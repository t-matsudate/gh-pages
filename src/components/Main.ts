import React from 'react';

interface MainProps {
  children: React.ReactNode[];
}

export default (props: MainProps): React.FC => {
  return (
    <div id="main">
    <main>
    {props.children}
    </main>
    </div>
  );
};
