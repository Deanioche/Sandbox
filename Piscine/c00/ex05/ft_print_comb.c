/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_print_comb.c                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: dohyulee <dohyulee@student.42seoul.kr>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/09/13 12:33:42 by dohyulee          #+#    #+#             */
/*   Updated: 2021/09/15 16:48:16 by dohyulee         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <unistd.h>

void	ft_print_comb(void)
{
	char	num[3];

	num[0] = '0' - 1;
	while (num[0]++ < '7')
	{
		num[1] = num[0];
		while (num[1]++ < '8')
		{
			num[2] = num[1];
			while (num[2]++ < '9')
			{
				write(1, &(num[0]), 1);
				write(1, &(num[1]), 1);
				write(1, &(num[2]), 1);
				if (num[0] == '7')
					return ;
				write(1, ", ", 2);
			}
		}
	}
}
