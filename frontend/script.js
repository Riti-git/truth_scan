function checkFraud() {
    const message = document.getElementById("message").value.toLowerCase();
  
    let result = "Not Fraud";
    let reason = "No suspicious pattern found";
  
    if (message.includes("urgent") || message.includes("otp")) {
      result = "Suspicious";
      reason = "Message uses urgency or asks for OTP";
    }
  
    document.getElementById("result").innerText = "Result: " + result;
    document.getElementById("reason").innerText = "Reason: " + reason;
  }
  