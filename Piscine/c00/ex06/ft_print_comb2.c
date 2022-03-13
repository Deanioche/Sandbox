/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_print_comb2.c                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: dohyulee <dohyulee@student.42seoul.kr>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/09/13 16:07:04 by dohyulee          #+#    #+#             */
/*   Updated: 2021/09/15 16:51:39 by dohyulee         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <unistd.h>

void	ft_putchar(char c)
{
	write(1, &c, 1);
}

void	ft_print_comb2(void)
{
	int	n[2];

	n[0] = -1;
	while (n[0]++ < 98)
	{
		n[1] = n[0];
		while (n[1]++ < 99)
		{	
			ft_putchar('0' + (n[0] / 10));
			ft_putchar('0' + (n[0] % 10));
			write(1, " ", 1);
			ft_putchar('0' + (n[1] / 10));
			ft_putchar('0' + (n[1] % 10));
			if (n[0] == 98)
				return ;
			write(1, ", ", 2);
		}
	}
}
