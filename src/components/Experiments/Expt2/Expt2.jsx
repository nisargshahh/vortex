import React, { Component } from "react";
import "./expt2.css";
export default class Expt1 extends Component {
  render() {
    return (
      <div className="expt-template">
        <h1 className="expt-heading">2. Implement Graph Theory</h1>
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
          To generate a weighted directed graph and visualize the graph using matplotlib and to find the shortest path using a shortest path algorithm with help of Networkx library.
        </p>

        <h3 className="expt-sub-heading">
          <u>Theory</u>
        </h3>
        <p>
          A Graph is a non-linear data structure consisting of vertices and edges.
          The vertices are sometimes also referred to as nodes and the edges are lines or arcs that connect any two nodes in the graph.
          More formally a Graph is composed of a set of vertices( V ) and a set of edges( E ). The graph is denoted by G(E, V). A Graph can be directed or un-directed.
          There are several terminologies used in graph theory and they are listed as follows:
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
        </ul>
        <h3 className="expt-sub-heading">
          <u>Procedure</u>
        </h3>
        <ul className="lab-manual">
          <li className="lab-manual-heading">Step 1: Installing dependencies</li>
          <p>
            The first thing you’ll need to do is install Matplotlib and Networkx packages on your machine using Pip by running the following command in the terminal: <br></br>
            pip install matplotlib <br></br>
            pip install networkx
          </p>
          <li className="lab-manual-heading">Step 2: Importing package and initializing graph object</li>
          <p>
            import networkx as nxG <br></br>
            G= nx.Graph()
          </p>
          <li className="lab-manual-heading">Step 3: Add nodes and edges between the nodes: </li>
          <p>
            G.add_nodes_from([1,2,3,4,5,6]) <br></br>
            G.add_edges_from([(1,2),(4,5),(3,5),(2,3),(5,6)])
          </p>
        </ul>
        <h3 className="expt-sub-heading">
          <u>Code</u>
        </h3>
        <h3 className="expt-sub-heading">
          <u>Questions</u>
        </h3>
        <ol>
          <li>What is Graph? Write it's details.</li>
          <li>List applications of Graph in various fields. </li>
          <li>What is a Complete Graph? </li>
          <li>What is a Clique? Explain with example.</li>
          <li>List different Shortest Path algorithms. Explain any one in detail.</li>
        </ol>
      </div>
    );
  }
}
