import React from 'react';

const { createClass } = React;

export default createClass({
  displayName: "Typography",

  render() {
    return (
      <section>
        <article className="mb3">
          <h3>Headings</h3>
          <h1>H1</h1>
          <h2>H2</h2>
          <h3>H3</h3>
          <h4>H4</h4>
          <h5>H5</h5>
          <h6>H6</h6>
        </article>
        <hr />
        <article className="mb3">
          <h3>Paragraph</h3>
          <p>The caravan has halted. It is the end of the line. All the evacuees are ordered out. They move slowly, but without resistance. Those marshaling them wear cockades the color of lead, and do not speak. It is some vast, very old and dark hotel, an iron extension of the track and switchery by which they have come here.... Globular lights, painted a dark green, hang from under the fancy iron eaves, unlit for centuries . . . the crowd moves without murmurs or coughing down corridors straight and functional as warehouse aisles . . . velvet black surfaces contain the movement: the smell is of old wood, of remote wings empty all this time just reopened to accommodate the rush of souls, of cold plaster where all the rats have died, only their ghosts, still as cave-painting, fixed stubborn and luminous in the walls . . . the evacuees are taken in lots, by elevator-a moving wood scaffold open on all sides, hoisted by old tarry ropes and cast-iron pulleys whose spokes are shaped like Ss. At each brown floor, passengers move on and off . . . thousands of these hushed rooms without light....</p>
          <hr />
          <h3>Small Paragraph</h3>
          <p><small>It is too late. The Evacuation still proceeds, but its all theatre. There are no lights inside the cars. No light anywhere. Above him lift girders old as an iron queen, and glass somewhere far above that would let the light of day through. But it's night. He's afraid of the way the glass will fall--soon--it will be a spectacle: the fall of a crystal palace. But coming down in total blackout, without one glint of light, only great invisible crashing.</small></p>
          <hr />
          <p className="bold">A bold paragraph using the .bold class.</p>
          <p className="italic">An italic paragraph using the .italic class.</p>
          <p className="left-align">A left aligned paragraph using the .left-align class.</p>
          <p className="center">A center aligned paragraph using the .center class.</p>
          <p className="right-align">A right aligned paragraph using the .right-align class.</p>
          <p className="justify">A justify aligned paragraph using the .justify class.</p>
          <p className="nowrap">This paragraph won't wrap because it's using the .nowrap class.</p>
        </article>

        <article>
          <h3>hr</h3>
          <hr />
        </article>
      </section>
    );
  }
});
