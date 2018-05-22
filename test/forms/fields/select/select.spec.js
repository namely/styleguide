import { expect } from 'chai';
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import SelectField from 'forms/fields/select/select';

describe('SelectField', () => {
  describe('value()', () => {
    it('returns correct selected value', () => {
      expect(
        TestUtils.renderIntoDocument(
          <SelectField
            name="payroll_job_id"
            options={['foo', 'bar']}
            defaultValue={'bar'}
          />
        ).value()
      ).to.eql('bar');

      expect(
        TestUtils.renderIntoDocument(
          <SelectField
            name="payroll_job_id"
            options={{foo: 1, bar: 2}}
            defaultValue={'bar'}
          />
        ).value()
      ).to.eql('bar');
    });

    it('returns null when given value does not match any options', () => {
      expect(
        TestUtils.renderIntoDocument(
          <SelectField
            name="payroll_job_id"
            options={['foo', 'bar']}
            defaultValue={'baz'}
          />
        ).value()
      ).to.eql('');

      expect(
        TestUtils.renderIntoDocument(
          <SelectField
            name="payroll_job_id"
            options={{foo: 1, bar: 2}}
            defaultValue={'baz'}
          />
        ).value()
      ).to.eql('');
    });
  });
});
