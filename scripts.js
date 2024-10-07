function formatDate(inputDate) {
    const date = new Date(inputDate);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

function addInputListeners() {
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('input', updateContent);
    });
}

function updateContent() {
    const fields = ['university', 'department', 'courseTitle', 'courseCode', 'coverType', 'coverTitle', 'teacherName', 'designation', 'teacherDepartment', 'studentName', 'studentId', 'studentBatch', 'section', 'session'];
    fields.forEach(field => {
        const value = document.getElementById(field).value;
        document.getElementById(field + 'Text').textContent = value;
        if (field === 'university') {
            document.getElementById(field + 'Text').className = "text-[13px]";
        } else {
            document.getElementById(field + 'Text').className = "text-[12px]";
        }
    });

    const submissionDate = document.getElementById('submissionDate').value;
    const formattedDate = submissionDate ? formatDate(submissionDate) : '';
    document.getElementById('submissionDateText').textContent = formattedDate;

    const selectedUniversity = document.getElementById('university').value
    const logoContainer = document.getElementById('logoContainer');
    const selectedOption = Array.from(document.getElementById('universityList').options).find(option => option.value === selectedUniversity);

    logoContainer.innerHTML = '';

    if(selectedOption) {
        const logoSrc = selectedOption.getAttribute('data-logo');
        if(logoSrc) {
            const logoImg = document.createElement('img');
            logoImg.src = logoSrc
            logoImg.alt = selectedUniversity + " Logo";
            logoImg.className = "p-4 max-w-[200px] max-h-[150px] mx-auto";
            logoContainer.appendChild(logoImg);
        }
    }
}

function allFieldsFilled() {
    const requiredFields = ['university', 'department', 'courseTitle', 'courseCode', 'coverType', 'coverTitle', 'teacherName', 'designation', 'teacherDepartment', 'studentName', 'studentId', 'studentBatch', 'section', 'session', 'submissionDate'];
    for(let field of requiredFields) {
        const value = document.getElementById(field).value.trim();
        if(!value) {
            return false;
        }
    }
    return true;
}

document.getElementById('download').addEventListener('click', () => {
    const outputContainer = document.querySelector('.output-section');
    outputContainer.classList.remove('hidden');

    if (!allFieldsFilled()) {
        showNotification('Fill all input fields before download');
        outputContainer.classList.add('hidden');
        return;
    }

    const element = document.getElementById('content');
    const studentName = document.getElementById('studentName').value;
    const firstName = studentName.split(' ')[0];
    let pdfName;
    if (document.getElementById('pdfName').value !== "") {
        pdfName = document.getElementById('pdfName').value;
    } else {
        pdfName = `${firstName}_${document.getElementById('studentId').value}`;
    }
    var fillFileName = pdfName.replace(/\s+/g, '_');

    if (!element) {
        console.error("Content element not found");
        alert("Error: Content element not found");
        outputContainer.classList.add('hidden');
        return;
    }
    if (typeof jspdf === 'undefined') {
        console.error("jsPDF library not loaded");
        alert("Error: PDF library not loaded");
        outputContainer.classList.add('hidden');
        return;
    }
    try {
        const doc = new jspdf.jsPDF({
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait',
            compress: true,
            precision: 16
        });
        const width = doc.internal.pageSize.getWidth();
        const height = doc.internal.pageSize.getHeight();
        html2canvas(element, {
            scale: 6,
            logging: false,
            letterRendering: true,
            allowTaint: true,
            useCORS: true,
            backgroundColor: null,
            imageTimeout: 0,
            removeContainer: true
        }).then(canvas => {
            const imgData = canvas.toDataURL('image/jpeg', 1.0);
            doc.addImage(imgData, 'JPEG', 0, 0, width, height, undefined, 'FAST');
            doc.save(`${fillFileName}.pdf`);
            outputContainer.classList.add('hidden');
        }).catch(err => {
            console.error("Error in html2canvas:", err);
            alert("Error creating PDF. Please check console");
            outputContainer.classList.add('hidden');
        });
    } catch (err) {
        console.error("Error creating PDF:", err);
        alert("Error creating PDF. Please check console");
        outputContainer.classList.add('hidden');
    }
});


addInputListeners();
document.addEventListener('DOMContentLoaded', () => {
    addInputListeners();
    updateContent();
});
