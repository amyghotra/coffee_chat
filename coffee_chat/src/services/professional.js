import axios from 'axios';

export const GetProfessionalInfo = async (professionalId) => {
  const professionalInfo = await axios.get(
    `http://localhost:5000/professionals/${professionalId}`
  );
  return professionalInfo;
};

export const GetProfessionalAvailability = async (professionalId) => {
  const professionalAvail = await axios.get(
    `http://localhost:5000/professionals/${professionalId}/availability`
  );

  return professionalAvail.data;
};
