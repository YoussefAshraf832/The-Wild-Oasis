import { useSettings } from "./useSettings";
import { useUpdateSetting } from "./useUpdateSetting";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";

function UpdateSettingsForm() {
  const {
    isLoading,
    error,
    settings: {
      minBookingLenghte,
      maxBookingLenghte,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
  } = useSettings();
  const { updateSetting, isUpdating } = useUpdateSetting();

  function handleUpdate(e, field) {
    const { value } = e.target;
    if (!value) return;
    updateSetting({ [field]: value });
  }

  if (isLoading) return <Spinner />;
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBookingLenghte}
          disabled={isUpdating}
          onBlur={(e) =>
            Number(e.target.value) !== minBookingLenghte &&
            handleUpdate(e, "minBookingLenghte")
          }
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBookingLenghte}
          disabled={isUpdating}
          onBlur={(e) =>
            Number(e.target.value) !== maxBookingLenghte &&
            handleUpdate(e, "maxBookingLenghte")
          }
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestsPerBooking}
          disabled={isUpdating}
          onBlur={(e) =>
            Number(e.target.value) !== maxGuestsPerBooking &&
            handleUpdate(e, "maxGuestsPerBooking")
          }
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
          disabled={isUpdating}
          onBlur={(e) =>
            Number(e.target.value) !== breakfastPrice &&
            handleUpdate(e, "breakfastPrice")
          }
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
