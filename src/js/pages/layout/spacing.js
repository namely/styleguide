import React from 'react';

const {
  createClass
} = React;

export default createClass({
  displayName: "SpacingUtilities",

  render() {
    return (
      <section>
        <article className="mt5">
          <h3>Margins</h3>
          <p>Change or reset default margins using the white space scale. Negative x-axis margins are used to offset margins and padding of child elements. Margin auto is used to horizontally center block-level elements with a set width.</p>
          <pre><code className="language-css">
          {[
            '.m0 { margin: 0; }',
            '.mt0 { margin-top: 0; }',
            '.mr0 { margin-right: 0; }',
            '.mb0 { margin-bottom: 0; }',
            '.ml0 { margin-left: 0; }',
            '',
            '.m1 { margin: $space-1; }',
            '.mt1 { margin-top: $space-1; }',
            '.mr1 { margin-right: $space-1; }',
            '.mb1 { margin-bottom: $space-1; }',
            '.ml1 { margin-left: $space-1; }',
            '',
            '.m2 { margin: $space-2; }',
            '.mt2 { margin-top: $space-2; }',
            '.mr2 { margin-right: $space-2; }',
            '.mb2 { margin-bottom: $space-2; }',
            '.ml2 { margin-left: $space-2; }',
            '',
            '.m3 { margin: $space-3; }',
            '.mt3 { margin-top: $space-3; }',
            '.mr3 { margin-right: $space-3; }',
            '.mb3 { margin-bottom: $space-3; }',
            '.ml3 { margin-left: $space-3; }',
            '',
            '.m4 { margin: $space-4; }',
            '.mt4 { margin-top: $space-4; }',
            '.mr4 { margin-right: $space-4; }',
            '.mb4 { margin-bottom: $space-4; }',
            '.ml4 { margin-left: $space-4; }',
            '',
            '.m5 { margin: $space-5; }',
            '.mt5 { margin-top: $space-5; }',
            '.mr5 { margin-right: $space-5; }',
            '.mb5 { margin-bottom: $space-5; }',
            '.ml5 { margin-left: $space-5; }',
            '',
            '.mxn1 { margin-left: -$space-1; margin-right: -$space-1; }',
            '.mxn2 { margin-left: -$space-2; margin-right: -$space-2; }',
            '.mxn3 { margin-left: -$space-3; margin-right: -$space-3; }',
            '.mxn4 { margin-left: -$space-4; margin-right: -$space-4; }',
            '.mxn5 { margin-left: -$space-5; margin-right: -$space-5; }',
            '',
            '.mx-auto { margin-left: auto; margin-right: auto; }'
          ].join('\n')}
          </code></pre>
        </article>       
        <article className="mt5">
          <h3>Padding</h3>
          <p>Padding utilities are only available in symmetrical orientations. This is to normalize the spacing used around elements and maintain a consistent visual rhythm.</p>
          <pre><code className="language-css">
          {[
            '.p0 { padding: 0; }',
            '.p1 { padding: $space-1; }',
            '.py1 { padding-bottom: $space-1; padding-top: $space-1; }',
            '.px1 { padding-left: $space-1; padding-right: $space-1; }',
            '',
            '.p2 { padding: $space-2; }',
            '.py2 { padding-bottom: $space-2; padding-top: $space-2; }',
            '.px2 { padding-left: $space-2; padding-right: $space-2; }',
            '',
            '.p3 { padding: $space-3; }',
            '.py3 { padding-bottom: $space-3; padding-top: $space-3; }',
            '.px3 { padding-left: $space-3; padding-right: $space-3; }',
            '',
            '.p4 { padding: $space-4; }',
            '.py4 { padding-bottom: $space-4; padding-top: $space-4; }',
            '.px4 { padding-left: $space-4; padding-right: $space-4; }',
            '',
            '.p5 { padding: $space-5; }',
            '.py5 { padding-bottom: $space-5; padding-top: $space-5; }',
            '.px5 { padding-left: $space-5; padding-right: $space-5; }',
          ].join('\n')}
          </code></pre>
        </article>
      </section>
    );
  }
});
