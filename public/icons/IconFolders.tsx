import React from "react";

function IconFolders({ strokeColor = "black" }: { strokeColor?: string }) {
  return (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"  stroke-width="2" stroke={strokeColor}  stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-folders-icon lucide-folders"><path d="M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z" stroke={strokeColor}/><path d="M2 8v11a2 2 0 0 0 2 2h14"/></svg>
  );
}

export default IconFolders;
