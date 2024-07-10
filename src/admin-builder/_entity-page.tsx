import { Button } from '@/components/ui/button';
import { AdminClientEntityBuilderContainer } from './_container';
import { EntityCardProvider } from './_entity-card';

export const EntityPageProvider = AdminClientEntityBuilderContainer.provider(
  ({ deps: { config, action }, innerDeps: { EntityCard } }) =>
    () => {
      return (
        <div>
          <h1>{config.title}</h1>
          <Button onClick={() => action()}>Create</Button>
          <>
            <EntityCard cock='cock' />
            {config.fields.map((field) => (
              <div key={field.name}>
                {field.type}: {field.name}
              </div>
            ))}
          </>
        </div>
      );
    },
  {
    EntityCard: EntityCardProvider,
  },
);
