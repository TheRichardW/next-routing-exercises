import React from 'react';

import ScreenSaver from '../../../../components/ScreenSaver';

function ScreenSaverExercise({params}) {
  return (
    <main>
     <ScreenSaver color={params.color} />
    </main>
  );
}

export default ScreenSaverExercise;
