import React, { Component } from "react";
import "./expt1.css";

export default class Expt1 extends Component {
  render() {
    return (
      <div className="expt-template">
        <h1 className="expt-heading">Experiment 6</h1>
        <h2 className="expt-sub-heading">
          <u>Introduction</u>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          aliquam. Reprehenderit repellendus tenetur cumque eius iusto adipisci
          mollitia nam impedit reiciendis blanditiis voluptatibus, praesentium
          accusamus magnam numquam fugit, debitis quo deserunt pariatur
          explicabo doloremque? Ducimus et neque inventore, omnis dignissimos
          veniam accusantium rem animi sed autem porro quo. Perspiciatis omnis
          ipsa quasi voluptate nesciunt voluptatem repellendus ad exercitationem
          molestias dolorum dolores, praesentium adipisci saepe minima veniam
          harum asperiores ipsam ea aliquid et temporibus cum atque obcaecati.
          Doloribus commodi excepturi consequuntur, similique magni atque
          impedit harum odio, quis amet omnis? Perferendis impedit harum fuga
          totam accusantium illum iusto, temporibus labore animi?
        </p>

        <h3 className="expt-sub-heading">
          <u>Acknowlegdements</u>
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          laudantium iure nostrum aliquid ullam voluptates impedit corrupti
          reiciendis dolores quis sed nihil, deleniti natus qui nemo! Velit
          earum maiores in harum, sit ipsum? Voluptatem, quibusdam minus vero
          recusandae sunt distinctio obcaecati aut voluptatum culpa nemo amet
          non, incidunt illum placeat modi! Quaerat voluptate ipsam quod autem,
          ipsum aut non aspernatur error voluptatibus illum eveniet nemo. Saepe
          autem excepturi deserunt soluta, magnam sint totam rem commodi error
          laudantium perferendis corrupti incidunt?
        </p>

        <h3 className="expt-sub-heading">
          <u>Features</u>
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda,
          ratione repellendus accusantium earum dignissimos tempore id quam
          ducimus magni consectetur harum, corrupti pariatur optio nobis qui quo
          deserunt numquam quasi:
        </p>
        <ul className="lab-manual">
          <li className="lab-manual-heading">Lab Objectives</li>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            distinctio ex quasi minus magni nobis sit fugit ab eius quo!
            <ul>
              <li>1. Lorem ipsum dolor sit amet consectetur.</li>
              <li>2. Lorem ipsum dolor sit amet consectetur.</li>
              <li>3. Lorem ipsum dolor sit amet consectetur.</li>
              <li>4. Lorem ipsum dolor sit amet consectetur.</li>
            </ul>
          </p>
          <li className="lab-manual-heading">Materials Required</li>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            minima laudantium rem est? Quaerat suscipit quis culpa illo, officia
            doloribus.
          </p>
          <li className="lab-manual-heading">Completion Times</li>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium earum a nisi facilis ipsa libero accusamus dolore culpa
            aspernatur esse?
          </p>
          <li className="lab-manual-heading">Activity Sections</li>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
            alias consectetur, consequatur perferendis ipsum temporibus illo at!
            Earum, accusantium iste.
          </p>
          <li className="lab-manual-heading">Step-by-Step Instructions</li>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam eos
            corporis perspiciatis id iste corrupti accusamus cupiditate
            blanditiis culpa repellendus?
          </p>
          <li className="lab-manual-heading">Review Questions</li>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur molestias ducimus perferendis veniam alias fugiat
            quisquam officiis voluptatum, quas debitis.
          </p>
        </ul>

        <h3 className="expt-sub-heading">
          <u>Questions</u>
        </h3>
        <ol>
          <li>What is the operating system of the computer you use?</li>
          <li>How much main memory does the computer you use have?</li>
          <li>What output devices areconnected to the computer you use? </li>
          <li>How much secondary storage does the computer you use have?</li>
          <li>When and where was ENIAC built?</li>
        </ol>
      </div>
    );
  }
}
