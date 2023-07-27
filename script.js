function converterTemperatura() {
    const celsiusInput = document.getElementById('celsius');
    const celsius = parseFloat(celsiusInput.value);
  
    if (isNaN(celsius)) {
      alert('Por favor, insira um valor válido para a temperatura em Celsius.');
      return;
    }
  
    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;
  
    document.getElementById('fahrenheit').textContent = fahrenheit.toFixed(2);
    document.getElementById('kelvin').textContent = kelvin.toFixed(2);
  }
  