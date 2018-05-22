import React from 'react';
import ColorData from '../../lib/_colors'

export default React.createClass({
  displayName: "Colors",

  colorClass(color, variant){
    return variant ? `${color}-${variant}` : `${color}`
  },

  render() {
    return (
      <section>
        {Object.keys(ColorData).map((base_color, index) => {
          return (
            <article className="mb3" key={`base-${index}`}>
              <h3 className={base_color}>{base_color}</h3>
              {Object.keys(ColorData[base_color]).map((variant, index) => {
                return (
                  <div className="flex flex-center flex-justify mb2" key={`variant-${index}`}>
                    <div className={"col-1 bg-" + this.colorClass(base_color, variant)}>{"\u00a0"}</div>
                    <div className={"col-1 " + this.colorClass(base_color, variant)}>{ColorData[base_color][variant]}</div>
                    <div className={"col-1 b bw-1 bc-" + this.colorClass(base_color, variant)}>{"\u00a0"}</div>
                    <div className="col-2">
                      <code className="language-css">
                        {".bg-" + this.colorClass(base_color, variant)}
                      </code>
                    </div>
                    <div className="col-2">
                      <code className="language-css">
                        {"." + this.colorClass(base_color, variant)}
                      </code>
                    </div>
                    <div className="col-2">
                      <code className="language-css">
                        {".bc-" + this.colorClass(base_color, variant)}
                      </code>
                    </div>
                  </div>
                  )
              })}
            </article>
            );
        })}
      </section>
      );
  }
});


