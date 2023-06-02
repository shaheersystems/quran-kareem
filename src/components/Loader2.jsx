import React from "react";

function Loader2() {
  return (
    <div class='w-full max-w-sm rounded-md'>
      <div class='flex animate-pulse space-x-4'>
        <div class='flex-1 space-y-6 py-1'>
          <div class='h-4 w-20 rounded bg-stone-700'></div>
          <div class='space-y-3'>
            <div class='h-4 rounded bg-stone-700'></div>
          </div>
          <div class='space-y-3'>
            <div class='h-4 w-36 rounded bg-stone-700'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader2;
