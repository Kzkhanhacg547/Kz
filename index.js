const { spawn } = require('child_process');
const path = require('path');

// Đường dẫn đến thư mục chứa môi trường con
const childDirectory = path.join(__dirname, 'SCR-K');

// Sử dụng spawn để chạy lệnh npm run start trong thư mục con
const childProcess = spawn('npm', ['run', 'start'], {
  cwd: childDirectory,
  stdio: 'inherit', // Kết quả của console của môi trường con sẽ được chuyển đến console chính
});

// Xử lý sự kiện khi quá trình con kết thúc
childProcess.on('exit', (code, signal) => {
  console.log(`Quá trình con đã kết thúc với mã thoát ${code}`);
});

// Xử lý sự kiện khi có lỗi trong quá trình chạy quá trình con
childProcess.on('error', (err) => {
  console.error(`Lỗi khi chạy quá trình con: ${err.message}`);
});

const express = require('express');

const app = express();

app.use(express.static(__dirname + "/website"));

const server = app.listen(0, () => {
  const port = server.address().port;
  console.log(`Server is running on port ${port}`);
});