document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://apiclienteejemplo.onrender.com/clients';
    
    // Obtener clientes y cargarlos en la tabla
    fetch(apiUrl)
        .then(response => response.json())
        .then(clients => {
            const clientTableBody = document.getElementById('clientTableBody');
            clientTableBody.innerHTML = '';
            clients.forEach((client, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${client.name}</td>
                    <td>${client.email}</td>
                    <td>${client.phone}</td>
                    <td><button class="view-details" data-index="${index}">Ver Detalles</button></td>
                `;
                clientTableBody.appendChild(row);
            });

            // Añadir event listeners para los botones "Ver Detalles"
            document.querySelectorAll('.view-details').forEach(button => {
                button.addEventListener('click', event => {
                    const index = event.target.getAttribute('data-index');
                    fetch(`${apiUrl}/${index}`)
                        .then(response => response.json())
                        .then(client => {
                            document.getElementById('clientName').textContent = client.name;
                            document.getElementById('clientEmail').textContent = client.email;
                            document.getElementById('clientPhone').textContent = client.phone;
                            document.getElementById('clientAddress').textContent = client.address;

                            // Últimas Compras
                            const recentPurchasesList = document.getElementById('recentPurchasesList');
                            recentPurchasesList.innerHTML = '';
                            client.recentPurchases.forEach(purchase => {
                                const listItem = document.createElement('li');
                                listItem.textContent = `${purchase.product} - $${purchase.value} - ${purchase.date}`;
                                recentPurchasesList.appendChild(listItem);
                            });

                            // Incidentes
                            const incidentsList = document.getElementById('incidentsList');
                            incidentsList.innerHTML = '';
                            client.incidents.forEach(incident => {
                                const listItem = document.createElement('li');
                                listItem.textContent = `${incident.description} - ${incident.date}`;
                                incidentsList.appendChild(listItem);
                            });

                            document.getElementById('clientModal').style.display = 'block';
                        });
                });
            });
        });

    // Cerrar modal
    const modal = document.getElementById('clientModal');
    const span = document.querySelector('.close');
    span.onclick = () => {
        modal.style.display = 'none';
    };
    window.onclick = event => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});
