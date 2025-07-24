import React from "react";

export default function ToolPanel() {
  return (
    <div className="w-1/5 bg-white border-r p-4">
      <h2 className="text-lg font-bold mb-4">Tools</h2>
      <button className="block mb-2 bg-blue-500 text-white p-2 rounded">Add Text</button>
      <button className="block mb-2 bg-green-500 text-white p-2 rounded">Upload Image</button>
      <button className="block mb-2 bg-purple-500 text-white p-2 rounded">Video Trim</button>
    </div>
  );
}
