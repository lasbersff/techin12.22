function predictSnowfall(temperatures, humidity) {
    const avgTemp = temperatures.reduce((sum, temp) => sum + temp, 0) / temperatures.length;
    let snowProbability = 0;
    if (avgTemp < 0)
        snowProbability += 35;
    if (humidity > 80)
        snowProbability += 40;
    const willSnow = snowProbability > 70;
  
    const expectedDepth = willSnow
      ? Math.round((100 - avgTemp) * humidity / 100)
      : 0;
  
    return {
      willSnow: willSnow,
      probability: snowProbability,
      expectedDepth: expectedDepth,
    };
  }
  
  let pre1 = predictSnowfall(
    [
      -6.8, -7.1, -6.9, -6.2, -5.4, -4.8, -4.1, -3.9, -3.5, -3.2, -3.0, -3.3,
      -3.7, -4.2, -4.9, -5.3, -5.8, -6.2, -6.5, -6.8, -7.0, -7.2, -7.1, -6.9,
    ],
    88
  );
  
  let pre2 = predictSnowfall(
    [
      -1.5, -1.3, -1.0, -0.8, -0.7, -0.9, -1.2, -1.4, -1.7, -2.0, -2.2, -2.4,
      -2.5, -2.3, -2.1, -1.8, -1.6, -1.4, -1.3, -1.5, -1.8, -2.1, -2.3, -2.4,
    ],
    60
  );
  
  console.log(pre1); 
  console.log(pre2);
  