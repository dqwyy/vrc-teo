// 动态加载 w3.js
function loadW3JS(callback) {
    var script = document.createElement('script');
    script.src = 'https://www.w3schools.com/lib/w3.js';  // 这里是 w3.js 的外部地址
    script.onload = callback;  // 加载完成后调用回调函数
    script.onerror = function() {
        console.error('Failed to load w3.js');
    };
    document.head.appendChild(script);  // 将脚本标签添加到 <head> 中
}

// 在加载 w3.js 后调用 callback
loadW3JS(function() {
    // 确保 w3.js 已经加载完成，可以安全使用 w3.includeHTML
    w3.includeHTML(callback);
});

function loadBootstrapScript() {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdmirror.com/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
    script.onload = function() {
        console.log('Bootstrap script loaded successfully.');
    };
    script.onerror = function() {
        console.error('Failed to load Bootstrap script.');
    };
    document.head.appendChild(script);
}

// 加载 Bootstrap 脚本
loadBootstrapScript();