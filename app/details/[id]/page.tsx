import DetailsCard from './DetailsCard';

export interface IParams {
  id?: string;
}

const DetailsPage = ({ params }: { params: IParams }) => {
  return <DetailsCard params={params} />;
};

export default DetailsPage;
