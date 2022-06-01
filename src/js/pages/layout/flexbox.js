// The Flexbox Documentation for the layout page
import React from 'react';
import createClass from 'create-react-class';

export default createClass({
  displayName: "Flexbox",

  render() {

    return (
      <section>

        <article className="mt3">
          <h3>{".flex"}</h3>
          <p>{"Example contains a parent container with a class of 'flex' and two child divs with no special classes."}</p>
          <div className="flex b bw-1 p2">
            <div className="b bw-1 p1">{"A DIV of content"}</div>
            <div className="b bw-1 p1">{"A DIV of content"}</div>
          </div>
        </article>

        <article className="mt3">
          <h3>{".flex-wrap"}</h3>
          <p>{"Example contains a parent container with classes 'flex' & 'flex-wrap' and twelve child divs with no special classes."}</p>
          <div className="flex flex-wrap b bw-1 p2">
            <div className="b bw-1 p1">{"A DIV of content"}</div>
            <div className="b bw-1 p1">{"A DIV of content"}</div>
            <div className="b bw-1 p1">{"A DIV of content"}</div>
            <div className="b bw-1 p1">{"A DIV of content"}</div>
            <div className="b bw-1 p1">{"A DIV of content"}</div>
            <div className="b bw-1 p1">{"A DIV of content"}</div>
            <div className="b bw-1 p1">{"A DIV of content"}</div>
            <div className="b bw-1 p1">{"A DIV of content"}</div>
            <div className="b bw-1 p1">{"A DIV of content"}</div>
            <div className="b bw-1 p1">{"A DIV of content"}</div>
            <div className="b bw-1 p1">{"A DIV of content"}</div>
            <div className="b bw-1 p1">{"A DIV of content"}</div>
            <div className="b bw-1 p1">{"A DIV of content"}</div>
          </div>
        </article>

        <article className="mt3 mb4">
          <h3>{".flex-column"}</h3>
          <p>{"Example contains a parent container with classes 'flex' & 'flex-column' and three child divs with no special classes."}</p>
          <div className="flex flex-column b bw-1 p2">
            <div className="b bw-1 p1">{"A DIV of content"}</div>
            <div className="b bw-1 p1">{"A DIV of content"}</div>
            <div className="b bw-1 p1">{"A DIV of content"}</div>
          </div>
        </article>

        <h2>Alignment</h2>
        <p>{"Use these utilities to control vertical alignment of child elements."}</p>

        <article className="mt3 mb4">
          <h3>{".flex-center"}</h3>
          <p>{"Example contains a parent container with classes 'flex' & 'flex-center' and two child divs with no special classes."}</p>
          <div className="flex flex-center b bw-1 p2" style={{height: "5em"}}>
            <div className="b bw-1 p1">{"A DIV of Content"}</div>
            <div className="b bw-1 p1">{"A DIV of Content"}</div>
          </div>
        </article>

        <article className="mt3 mb4">
          <h3>{".flex-stretch"}</h3>
          <p>{"Example contains a parent container with classes 'flex' & 'flex-stretch' and two child divs with no special classes."}</p>
          <div className="flex flex-stretch b bw-1 p2" style={{height: "5em"}}>
            <div className="b bw-1 p1">{"A DIV of Content"}</div>
            <div className="b bw-1 p1">{"A DIV of Content"}</div>
          </div>
        </article>

        <article className="mt3 mb4">
          <h3>{".flex-baseline"}</h3>
          <p>{"Example contains a parent container with classes 'flex' & 'flex-baseline' and two child divs with no special classes."}</p>
          <div className="flex flex-baseline b bw-1 p2">
            <div className="b bw-1 p1">{"A DIV of Content"}</div>
            <div className="b bw-1 p1">{"A DIV of Content"}</div>
          </div>
        </article>

        <article className="mt3 mb4">
          <h3>{".flex-start"}</h3>
          <p>{"Example contains a parent container with classes 'flex' & 'flex-start' and two child divs with no special classes."}</p>
          <div className="flex flex-start b bw-1 p2" style={{height: "5em"}}>
            <div className="b bw-1 p1">{"A DIV of Content"}</div>
            <div className="b bw-1 p1">{"A DIV of Content"}</div>
          </div>
        </article>

        <article className="mt3 mb4">
          <h3>{".flex-end"}</h3>
          <p>{"Example contains a parent container with classes 'flex' & 'flex-end' and two child divs with no special classes."}</p>
          <div className="flex flex-end b bw-1 p2" style={{height: "5em"}}>
            <div className="b bw-1 p1">{"A DIV of Content"}</div>
            <div className="b bw-1 p1">{"A DIV of Content"}</div>
          </div>
        </article>

        <article className="mt3 mb4">
          <h3>{".flex-justify"}</h3>
          <p>{"Example contains a parent container with classes 'flex' & 'flex-justify' and two child divs with no special classes."}</p>
          <div className="flex flex-justify b bw-1 p2">
            <div className="b bw-1 p1">{"A DIV of Content"}</div>
            <div className="b bw-1 p1">{"A DIV of Content"}</div>
            <div className="b bw-1 p1">{"A DIV of Content"}</div>
          </div>
        </article>

        <h2>Child elements</h2>
        <p>To control the size and behavior of child elements, use these utilities.</p>

        <article className="mt3 mb4">
          <h3>{".flex-auto"}</h3>
          <p>{"Example contains a parent container with a class of 'flex' with two child divs with no special classes and one child with a class of 'flex-auto'."}</p>
          <div className="flex b bw-1 p2">
            <div className="b bw-1 p1">{"A DIV of content"}</div>
            <div className="flex-auto b bw-1 p1">{"A DIV of content"}</div>
            <div className="b bw-1 p1">{"A DIV of ccntent"}</div>
          </div>
        </article>

        <article className="mt3 mb4">
          <h3>{".flex-grow"}</h3>
          <p>{"Example contains a parent container with a class of 'flex' with two child divs with no special classes and one child with a class of 'flex-grow'."}</p>
          <div className="flex b bw-1 p2">
            <div className="b bw-1 p1">{"A DIV of content"}</div>
            <div className="flex-grow b bw-1 p1">{"A DIV of content"}</div>
            <div className="b bw-1 p1">{"A DIV of content"}</div>
          </div>
        </article>

        <article className="mt3 mb4">
          <h3>{".flex-equal"}</h3>
          <p>{"Example contains a parent container with a class of 'flex' with two child divs with a class of 'flex-equal'."}</p>
          <div className="flex b bw-1 p2">
            <div className="flex-equal b bw-1 p1">{"A DIV of content"}</div>
            <div className="flex-equal b bw-1 p1">{"A DIV of Content that wraps.  The column widths remain equal regardless of content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium nulla vitae dolor consectetur tristique. Nam et velit suscipit orci imperdiet tristique in a risus."}</div>
          </div>
        </article>

        <article className="mt3 mb4">
          <h3>{".flex-none"}</h3>
          <p>{"Example contains a parent container with a class of 'flex' with two child divs with a class of 'flex-auto' and one child with a class of 'flex-none'."}</p>
          <div className="flex b bw-1 p2">
            <div className="flex-auto b bw-1 p1">{"A DIV of content"}</div>
            <div className="flex-auto b bw-1 p1">{"A DIV of content"}</div>
            <div className="flex-auto b bw-1 p1">{"A DIV of content"}</div>
          </div>
        </article>

      </section>

      );

  },

});
