import React, { useEffect, useState } from 'react';
function Contact({ videoId }){
    return (
            <div>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/a4na2opArGY`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          );
        }
        
   
export default Contact