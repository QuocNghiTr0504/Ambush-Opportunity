import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { CountryAPI } from '@/api/country/CountryAPI';
import { ICountry } from '@/interfaces/ICountry';



interface CountryCodeSelectProps {
    countryCallingCode: string;
    setValue: any;
    required?: boolean;
}

const CountryCodeSelect: React.FC<CountryCodeSelectProps> = ({ countryCallingCode, setValue, required = false }) => {
    const [countries, setCountries] = useState<ICountry[]>([]);

    const [selected, setSelected] = useState(84);
    const fetchSupportedCountries = async () => {
        try {
            // Sort follow coutryShortCode
            let response = await CountryAPI.getSupportedCountries();
            if (response.data) {
                const sortedCountries = response.data.sort((a: ICountry, b: ICountry) => {
                    return a.countryShortCode.localeCompare(b.countryShortCode, 'en', { sensitivity: 'base' });
                });
                setCountries(sortedCountries);
            }
        }
        catch (error) {
            console.error("Error fetching countries", error);
        }
    }
    useEffect(() => {
        fetchSupportedCountries()
    }, [])

    useEffect(() => {
        setValue(countryCallingCode, selected, { shouldValidate: true, shouldDirty: true });
    }, [countryCallingCode, selected, setValue])
    return (
        <Select
            showSearch
            optionFilterProp="children"
            style={{ minWidth: "100px", height: "100%" }}
            value={selected}
            onChange={(value) => {
                setSelected(value);
            }}
            suffixIcon={<DownOutlined />}
        >
            {countries.map(country => (
                <Select.Option key={country.countryShortCode} value={country.phoneCodeInt}>
                    <span>{country.countryFlag}</span>  {country.phoneCode}
                </Select.Option>
            ))}
        </Select>
    );
};

export default CountryCodeSelect;
