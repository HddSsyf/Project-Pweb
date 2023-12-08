// Data awal item musik
let musicItems = [
  { id: 1, name: "Gitar", price: 500000 },
  { id: 2, name: "Keyboard", price: 700000 },
];

// Fungsi untuk menampilkan item musik
function displayItems() {
  const musicItemsDiv = document.getElementById('musicItems');
  musicItemsDiv.innerHTML = '';

  musicItems.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('musicItem');
    itemDiv.innerHTML = `
      <h3>${item.name}</h3>
      <p>Harga: ${item.price}</p>
      <button onclick="deleteItem(${item.id})">Hapus</button>
    `;
    musicItemsDiv.appendChild(itemDiv);
  });
}

// Fungsi untuk menambah item baru
function addItem(event) {
  event.preventDefault();
  const itemName = document.getElementById('itemName').value;
  const itemPrice = parseInt(document.getElementById('itemPrice').value);

  if (itemName && !isNaN(itemPrice)) {
    const newItem = {
      id: musicItems.length + 1,
      name: itemName,
      price: itemPrice
    };
    musicItems.push(newItem);
    displayItems();
    clearForm();
  }
}

// Fungsi untuk menghapus item
function deleteItem(id) {
  musicItems = musicItems.filter(item => item.id !== id);
  displayItems();
}

// Fungsi untuk mengosongkan form
function clearForm() {
  document.getElementById('addItemForm').reset();
}

// Memanggil fungsi untuk menampilkan item pada saat halaman dimuat
displayItems();

// Menambahkan event listener untuk form
document.getElementById('addItemForm').addEventListener('submit', addItem);
