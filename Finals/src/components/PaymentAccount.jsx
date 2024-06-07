// ./components/PaymentAccount.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PaymentAccount = () => {
  const [accountData, setAccountData] = useState([]);

  useEffect(() => {
    // Получение данных аккаунта при загрузке компонента
    axios.get('http://localhost:3001/api/payment-account')
      .then(response => {
        setAccountData(response.data);
      })
      .catch(error => {
        console.error('Ошибка при получении данных аккаунта:', error);
      });
  }, []);

  return (
    <div className="payment-account">
      <h2>Payment Account</h2>
      <ul>
        {accountData.map(account => (
          <li key={account.id}>
            Account Number: {account.account_number}, Balance: ${account.balance}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentAccount;
