// Лабораторная работа 2: Анализ успеваемости
// Исходные данные студентов
const grades = [
    { name: "Макар", score: 85 },
    { name: "Денис", score: 92 },
    { name: "Анна", score: 78 },
    { name: "Даша", score: 88 },
    { name: "Студент_X", score: 45 }
];

// 1. Вычисление среднего балла (Программист 1 — Денис)
function calculateAverage(data) {
    if (data.length === 0) return 0;
    const sum = data.reduce((acc, student) => acc + student.score, 0);
    return sum / data.length;
}

// 2. Поиск лучшего студента (Программист 2)
function findTopStudent(data) {
    if (data.length === 0) return null;
    const topStudent = data.reduce((best, current) =>
        current.score > best.score ? current : best
    );
    return topStudent.name;
}

// 3. Список должников ниже проходного балла (Программист 3)
function filterFailed(data, passScore = 60) {
    return data
        .filter(student => student.score < passScore)
        .map(student => student.name);
}

// 4. Добавление буквенных оценок (Программист 4)
function addLetterGrade(data) {
    return data.map(student => {
        let letter;
        if (student.score >= 90) {
            letter = "A";
        } else if (student.score >= 75) {
            letter = "B";
        } else {
            letter = "C";
        }
        return { ...student, letter };
    });
}

// --- Итоговый отчет ---
console.log("Средний балл группы:", calculateAverage(grades));
console.log("Лучший студент:", findTopStudent(grades));
console.log("Список должников (балл < 60):", filterFailed(grades, 60));
console.log("Итоговый массив с буквенными оценками:");
console.log(addLetterGrade(grades));
