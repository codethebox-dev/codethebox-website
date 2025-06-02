const codeTextarea = document.getElementById('code');
const runBtn = document.getElementById('runBtn');
const previewFrame = document.getElementById('preview');

function runCode() {
  const code = codeTextarea.value;
  const preview = previewFrame.contentDocument || previewFrame.contentWindow.document;
  preview.open();
  preview.write(code);
  preview.close();
}

runBtn.addEventListener('click', runCode);

// Run initial code on page load
window.onload = runCode;
