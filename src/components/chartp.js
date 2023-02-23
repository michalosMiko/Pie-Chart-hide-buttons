import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import "./chartp.css"

function VoteComponent() {
    const [upvotes, setUpvotes] = useState(2);
    const [downvotes, setDownvotes] = useState(1);

    const data = [
        { name: "Palec nahoru", value: upvotes },
        { name: "Palec dolů", value: downvotes },
      ];

      const COLORS = ["#0088FE", "#FF8042"];

      function handleUpvote() {
        setUpvotes((prevUpvotes) => prevUpvotes + 1);
      }
      function handleDownvote() {
        setDownvotes((prevDownvotes) => prevDownvotes + 1);
      }

  return <div>
    <button onClick={handleUpvote}>
        <FaThumbsUp /> Palec nahoru
      </button>
      <button onClick={handleDownvote}>
        <FaThumbsDown /> Palec dolů
      </button>
      <h1>Hlasování</h1>
      <PieChart className="graf" width={400} height={400}>
        
        <Pie className="graf-pie"
        dataKey="value"
        data={data}
        innerRadius={70}
        outerRadius={90}
        fill="#8884d8"
        >
            {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      
    </div>
  
}

export default VoteComponent