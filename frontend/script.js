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
  const addFileBtn = document.getElementById("addFileBtn");
  const fileInput = document.getElementById("fileInput");
  const fileName = document.getElementById("fileName");

  addFileBtn.addEventListener("click", () => {
    fileInput.click(); // open file picker
  });

  fileInput.addEventListener("change", () => {
    if (fileInput.files.length > 0) {
      fileName.textContent = "Attached: " + fileInput.files[0].name;
    }
  });
