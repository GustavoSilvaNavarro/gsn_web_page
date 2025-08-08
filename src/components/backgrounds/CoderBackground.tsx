'use client';

import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export const CoderBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const mouse = useRef(new THREE.Vector2());

  useEffect(() => {
    // Scene setup
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // Create a new geometry for the network visualization
    const pointsCount = 1000;
    const vertices = [];
    for (let i = 0; i < pointsCount; i++) {
      // Generate random points within a certain radius to form a cloud
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      vertices.push(x, y, z);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    // Create the points material
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0x00ffff, // Changed to a bright cyan
      size: 0.05,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.8,
    });
    const points = new THREE.Points(geometry, pointsMaterial);
    scene.add(points);

    // Create a material for the connecting lines
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x00a0a0, // Changed to a slightly darker aqua
      transparent: true,
      opacity: 0.1,
    });

    const linesGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(pointsCount * pointsCount * 3); // Max possible lines
    linesGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lines = new THREE.LineSegments(linesGeometry, lineMaterial);
    scene.add(lines);

    // Camera position
    camera.position.z = 5;

    // Mouse movement event handler
    const onMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the entire scene based on mouse position
      scene.rotation.y = mouse.current.x * 0.1;
      scene.rotation.x = mouse.current.y * 0.1;

      // Update the lines
      const positions = geometry.attributes.position.array as Float32Array;
      const linePositions = linesGeometry.attributes.position.array as Float32Array;
      let lineIndex = 0;

      for (let i = 0; i < pointsCount; i++) {
        // We use a simple sine wave to make the points "breathe" or move
        positions[i * 3 + 0] += Math.sin(Date.now() * 0.0005 + i) * 0.0001;
        positions[i * 3 + 1] += Math.cos(Date.now() * 0.0005 + i) * 0.0001;
        positions[i * 3 + 2] += Math.sin(Date.now() * 0.0005 + i) * 0.0001;

        // Connect nearby points to create the network effect
        for (let j = i + 1; j < pointsCount; j++) {
          const dx = positions[i * 3] - positions[j * 3];
          const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
          const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (distance < 1.5) {
            // Add a line between the two points
            linePositions[lineIndex++] = positions[i * 3];
            linePositions[lineIndex++] = positions[i * 3 + 1];
            linePositions[lineIndex++] = positions[i * 3 + 2];

            linePositions[lineIndex++] = positions[j * 3];
            linePositions[lineIndex++] = positions[j * 3 + 1];
            linePositions[lineIndex++] = positions[j * 3 + 2];
          }
        }
      }
      linesGeometry.setDrawRange(0, lineIndex); // Only draw the lines we created
      linesGeometry.attributes.position.needsUpdate = true;
      geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      if (currentMount) {
        camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      pointsMaterial.dispose();
      lineMaterial.dispose();
      linesGeometry.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0 opacity-80" />;
};
