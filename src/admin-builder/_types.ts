type TextField = {
  name: string;
  label: string;
  type: 'text';
};

type SelectField = {
  name: string;
  label: string;
  type: 'select';
  options: { label: string; value: string }[];
};

export type AdminBuilderField = TextField | SelectField;

export type AdminEntityConfig = {
  name: string;
  title: string;
  fields: AdminBuilderField[];
};
