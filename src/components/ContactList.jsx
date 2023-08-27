import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilteredContacts, selectError, selectIsLoading} from '../redux/selectors';
import { fetchContacts } from 'redux/operations';
import { deleteContact } from 'redux/operations';
import { NotFound } from './NotFound';
import { Loader } from './Loader';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleRemove = (id) => {
    dispatch(deleteContact(id));
  };
 
  if (filteredContacts.length === 0 && !isLoading) {
      return <NotFound />;
  }
  return (
    <div className="row d-flex justify-content-center align-items-center">
      {isLoading && <Loader />}
      {(contacts.length === 0  && !error && !isLoading) ? (<NotFound />) :(
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th className="text-center align-middle">Name</th>
            <th className="text-center align-middle">Phone Number</th>
            <th className="text-center align-middle"> </th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.map(contact => (
            <tr key={contact.id} className="fw-normal">
              <td className="text-center align-middle">
                {contact.name
                  .split(' ')
                  .map(n => n.charAt(0).toUpperCase() + n.slice(1))
                  .join(' ')}
              </td>
              <td className="text-center align-middle">{contact.phone}</td>
              <td className="text-center align-middle">
                <button
                  className="btn btn-warning"
                  type="button"
                  onClick={() => { handleRemove(contact.id);}}
                > Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
    </div>
  );
};
