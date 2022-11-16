import React, { Component } from "react";
import "./expt2.css";

export default class Expt1 extends Component {
  render() {
    return (
      <div className="expt-template">
        <h1 className="expt-heading">Implement Graph Theory</h1>
        <h2 className="expt-sub-heading">
          <u>Aim</u>
        </h2>
        <p>
          To implement Graph Theory in Python using NetworkX library.
        </p>

        <h3 className="expt-sub-heading">
          <u>Objective</u>
        </h3>
        <p>
         To generate a weighted directed graph and visualize the graph using matplotlib and to find the shortest path using a shortest path algorithm. 
        </p>

        <h3 className="expt-sub-heading">
          <u>Theory</u>
        </h3>
        <p>
          A Graph is a non-linear data structure consisting of vertices and edges. 
      The vertices are sometimes also referred to as nodes and the edges are lines or arcs that connect any two nodes in the graph.
      More formally a Graph is composed of a set of vertices( V ) and a set of edges( E ). The graph is denoted by G(E, V). A Graph can be directed or un-directed.
        </p>
        <ul className="lab-manual">
          <li className="lab-manual-heading">Types of Graph</li>
          <p>
            There are several types of graphs distinguished on the basis of edges, their direction, their weight etc. It can be broadly classified as-
            <ul>
              <li>1.Simple Graph</li>
              <p> A graph in which each edge connects two different vertices and where no two edges connect 
              the same pair of vertices is called a simple graph. For example,

                </p>
              <li>2. Multi Graph</li>
              <p> A graph in which multiple edges may connect the same pair of vertices is called a multigraph. 
              Since there can be multiple edges between the same pair of vertices, the multiplicity of edge tells 
              the number of edges between two vertices. For example,
                </p>
            </ul>
          </p>
          <li className="lab-manual-heading">Complete Graph-</li>
          <p>
            A complete Graph is a special type of Simple Graph. 
            It is an un-directed graph in which each pair of graph vertices is connected by an edge.
            In other words,every node ‘u’ is adjacent to every other node ‘v’ in graph ‘G’.A complete graph would have n(n-1)/2 edges.
            For example,
          </p>
          <li className="lab-manual-heading">Clique</li>
          <p>
            A clique is a collection of vertices in an undirected graph G such that every two different vertices in the clique are nearby  
            implying that the induced subgraph is complete. A clique in an undirected graph is a complete subgraph of the given graph. 
            A complete sub-graph is one in which all of its vertices are linked to all of its other vertices.
            Example:
            Consider a social networking program in which the vertices in a graph reflect people’s profiles 
            and the edges represent mutual acquaintance. A clique in this graph indicates a group of people who all know each other.

          </p>
          <li className="lab-manual-heading">Applications</li>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
            alias consectetur, consequatur perferendis ipsum temporibus illo at!
            Earum, accusantium iste.
          </p>
          <li className="lab-manual-heading">Shortest Path Algorithms</li>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam eos
            corporis perspiciatis id iste corrupti accusamus cupiditate
            blanditiis culpa repellendus?
          </p>
          <li className="lab-manual-heading">NetworkX Library</li>
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
          <li>What is Graph? Wripte it's details.</li>
          <li>List applications of Graph in various fields. </li>
          <li>What is a Complete Graph? </li>
          <li>What is a Clique? Explain with example.</li>
          <li>List different Shortest Path algorithms. Explain any one in detail.</li>
        </ol>
      </div>
    );
  }
}
