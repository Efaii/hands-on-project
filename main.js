const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let tasks = []; // Untuk menyimpan daftar tugas

// Fungsi untuk menampilkan menu
function showMenu() {
    console.log(
        `✨ Sistem Manajemen Tugas ✨
        1. Tambah Tugas
        2. Lihat Daftar Tugas
        3. Update Tugas
        4. Hapus Tugas
        5. Keluar`
    );
    rl.question("Pilih opsi: ", handleMenu)
}

// Fungsi untuk menangani pilihan menu
function handleMenu(pilihan) {
    switch (parseInt(pilihan)) {
        case 1:
            rl.question("Masukkan nama tugas: ", (task) => {
                addTask(task);
                showMenu();
            });
            break;
        case 2:
            displayTasks();
            showMenu();
            break;
        case 3:
            rl.question("Masukkan nomor tugas yang sudah selesai: ", (index) => {
                updateTask(parseInt(index) - 1);
                showMenu();
            });
            break;
        case 4:
            rl.question("Masukkan nomor tugas yang ingin dihapus: ", (index) => {
                deleteTask(parseInt(index) - 1);
                showMenu();
            });
            break;
        case 5:
            console.log("Keluar dari program. Sampai jumpa lagi!👋")
            rl.close();
            break;
        default:
            console.log("❗Pilihan tidak valid! Coba lagi")
            showMenu();
            break;
    }
}

// Fungsi untuk menambahkan tugas
function addTask(task) {
    tasks.push({name : task, complete: false});
    console.log(`Tugas ${task} berhasil ditambahkan.✅`);
}

// Fungsi untuk menampilkan daftar tugas
function displayTasks() {
    if (tasks.length === 0) {
        console.log("⛔Belum ada tugas.");
    } else {
        console.log(`=== Daftar Tugas ===`);
        tasks.forEach((task, index) => {
            const status = task.completed ? "[✅]" : "[ ]";
            console.log(`${index + 1}. ${status} ${task.name}`);
        });
    }
}

// Fungsi untuk update tugas
function updateTask(index) {
    if (index >= 0 && index < tasks.length) {
        tasks[index].completed = true;
        console.log(`Tugas ${tasks[index].name} telah ditandai selesai.✅`);
    } else {
        console.log("❗Nomor tugas tugas tidak valid.")
    }
}

// Fungsi untuk menghapus tugas
function deleteTask(index) {
    if (index >= 0 && index < tasks.length) {
        const removedTask = tasks.splice(index, 1);
        console.log(`Tugas ${removedTask[0].name} berhasil dihapus.✅`);
    } else {
        console.log("❗Nomor tugas tidak valid.");
    }
}

// Fungsi untuk menampilkan menu pertama kali
showMenu();