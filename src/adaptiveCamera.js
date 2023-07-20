function adaptiveCamera(fov) {
  const updateCamera = () => {
    const widthWindow = window.innerWidth;

    let multiplier =
      widthWindow > 1200
        ? 1
        : widthWindow > 800
        ? 1.2
        : widthWindow > 700
        ? 1.4
        : widthWindow > 600
        ? 1.8
        : 2.0;

    return fov * multiplier;
  };

  window.addEventListener('resize', updateCamera);

  // Initial camera update
  return parseInt(updateCamera());
}

export default adaptiveCamera;
