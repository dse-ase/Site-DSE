import { SimpleHeader } from '../components/SimpleHeader';
import { Footer } from '../components/Footer';
import { MasterASDSDetails } from '../components/MasterASDSDetails';

export default function MasterASDSPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <SimpleHeader />
      <MasterASDSDetails />
      <Footer />
    </div>
  );
}