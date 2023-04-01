function startTx() {
    setInterval(() => {
        let tx = Math.floor(Math.random() * 6) + 1
        let tx1 = Math.floor(Math.random() * 6) + 1
        let tx2 = Math.floor(Math.random() * 6) + 1
        let returns = tx + tx1 + tx2
        if (returns > 10) {
            document.write("<table border=1 width=15%>")
            document.write("<tr>")
            document.write(`<td>${tx} ${tx1} ${tx2} Tổng: ${returns} <span class="icon">👉</span>Tài</td>`)
            document.write("</tr>")
            document.write("</tr></table>")
            returns = 0
        } else {
            document.write("<table border=1 width=15%>")
            document.write("<tr>")
            document.write(`<tr><td>${tx} ${tx1} ${tx2} Tổng: ${returns} <span class="icon">👉</span>Xỉu</td></tr>`)
            document.write("</tr>")
            document.write("</tr></table>")
            returns = 0
        }
    }, 35000)
}


// setInterval