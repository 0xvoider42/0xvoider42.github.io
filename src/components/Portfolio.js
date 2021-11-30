import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import './Portfolio.css';

function Portfolio() {
  const [coins, setCoins] = useState([]);
  const picSize = { maxWidth: '50px', maxHeight: '50px' };
  const { t } = useTranslation();

  const url = `https://api.coinstats.app/public/v1/coins?skip=0&limit=50&currency=EUR`;

  useEffect(() => {
    getCoins();
    let mounted = true;
    async function getCoins() {
      const raw = await fetch(url);
      const data = await raw.json();
      let crypto = data.coins;
      console.log(crypto);
      if (mounted) {
        setTimeout(() => {
          setCoins(crypto);
        }, 5 * 1000);
      }
    }
    return () => {
      mounted = false;
    };
  });

  return (
    <>
      {coins && (
        <div className='container mx-auto px-6 py-8'>
          <div>
            <div className='my-6 text-left overflow-hidden rounded-md shadow'>
              <table className='w-full border-collapse'>
                <thead>
                  <tr>
                    <th className='px-5 py-3 text-sm font-medium text-gray-100 uppercase bg-indigo-800'>
                      {' '}
                      {t('port.coins')}{' '}
                    </th>
                    <th className='px-5 py-3 text-sm font-medium text-gray-100 uppercase bg-indigo-800'>
                      {' '}
                      {t('port.price')}{' '}
                    </th>
                    <th className='px-5 py-3 text-sm font-medium text-gray-100 uppercase bg-indigo-800'>
                      {' '}
                      {t('port.volume')}{' '}
                    </th>
                    <th className='px-5 py-3 text-sm font-medium text-gray-100 uppercase bg-indigo-800'>
                      {' '}
                      {t('port.market_cap')}{' '}
                    </th>
                  </tr>
                </thead>
                {coins.map((crypto, index) => {
                  return (
                    <>
                      <tbody key={index}>
                        <tr className='hover:bg-gray-200'>
                          <td className='px-6 py-4 text-lg text-gray-700 border-b'>
                            <a href={crypto.websiteUrl} target='_blank' rel='noreferrer'>
                              <img style={picSize} src={crypto.icon} alt={crypto.id} />
                              {crypto.name}
                            </a>
                          </td>
                          <td className='px-6 py-4 text-gray-500 border-b'>
                            {crypto.price.toFixed(2)} €
                          </td>
                          <td className='px-6 py-4 text-gray-500 border-b'>
                            {crypto.volume.toFixed(2)} €
                          </td>
                          <td className='px-6 py-4 text-gray-500 border-b'>
                            {crypto.marketCap.toFixed(2)} €
                          </td>
                        </tr>
                      </tbody>
                    </>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Portfolio;
