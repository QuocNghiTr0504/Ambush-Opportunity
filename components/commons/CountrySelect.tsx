'use client'
import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { CountryAPI } from '@/api/country/CountryAPI';
import { ICountry } from '@/interfaces/ICountry';
import { useTranslation } from 'react-i18next';



interface CountrySelectProps {
    countryCode: string;
    setValue: any;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ countryCode, setValue }) => {
    const [countries, setCountries] = useState<ICountry[]>([]);
    const { t } = useTranslation();
    const fetchSupportedCountries = async () => {
        try {
            let response = await CountryAPI.getSupportedCountries();
            if (response.data) {
                setCountries(response.data);
            }
        }
        catch {

        }
    }
    useEffect(() => {
        fetchSupportedCountries()
    }, [])
    return (
        <Select
            showSearch
            placeholder={t("SelectCountry")}
            optionFilterProp="children"
            style={{ width: '100%', height: "100%" }}
            onChange={(value) => {
                console.log(value)
                setValue(countryCode, value, { shouldValidate: true, shouldDirty: true });

            }}
            suffixIcon={<DownOutlined />}
        >
            {countries.map(country => (
                <Select.Option key={country.countryShortCode} value={country.countryShortCode}>
                    <span>{country.countryFlag}</span>  {country.countryName}
                </Select.Option>
            ))}
        </Select>
    );
};

export default CountrySelect;
